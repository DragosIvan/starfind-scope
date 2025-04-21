import { createWorker } from 'tesseract.js';

export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch (clipboardError) {
                console.warn(
                    'Clipboard API failed, falling back to legacy method:',
                    clipboardError
                );
                // Fall through to legacy method
            }
        }

        // Legacy method using textarea
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '0';
        textArea.style.top = '0';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            return successful;
        } catch (err) {
            document.body.removeChild(textArea);
            console.error('Legacy copy method failed:', err);
            return false;
        }
    } catch (err) {
        console.error('Failed to copy to clipboard:', err);
        return false;
    }
}

export async function recognizeTextFromImage(image: Blob) {
    try {
        // Create a Tesseract worker with paths relative to the base path
        const worker = await createWorker('eng', 1, {
            workerPath: './workers/worker.min.js', // Relative path to the worker script
            corePath: './core/tesseract-core.wasm.js', // Relative path to the core script
            langPath: './tesseract_data/', // Relative path to language data
        });

        // Recognize text from the base64 image
        const {
            data: { text },
        } = await worker.recognize(image);

        // Terminate the worker
        await worker.terminate();

        let finalText = text;

        // Replace all newlines with spaces
        finalText = finalText.replace(/\n/g, ' ');

        finalText = finalText.replace('itwill', 'it will');
        finalText = finalText.replace('mines', 'minutes');

        // Normalize the input string
        finalText = finalText.replace('t0', 'to');

        // Ensure proper spacing around 'to' and 'minutes'
        finalText = finalText
            .replace(/(\d)\s*to\s*(\d)/g, '$1 to $2')
            .replace(/(\d)\s*minutes/g, '$1 minutes');

        // Add 'to' between numbers if missing
        finalText = finalText.replace(/(\d+)\s+(\d+)/g, '$1 to $2');

        // Deal with cases when the first number is greater than the second
        const timeRangeMatch = finalText.match(/(\d+)\s+to\s+(\d+)/);
        if (timeRangeMatch) {
            const [_, start, end] = timeRangeMatch;
            const startNum = parseInt(start);
            const endNum = parseInt(end);

            // If first number is greater than second, remove its last digit
            if (startNum > endNum) {
                finalText = finalText.replace(
                    timeRangeMatch[0],
                    `${Math.floor(startNum / 10)} to ${endNum}`
                );
            } else {
                finalText = finalText.replace(
                    timeRangeMatch[0],
                    `${startNum} to ${endNum}`
                );
            }
        }

        return finalText;
    } catch (error) {
        console.error('Error during OCR:', error);
        throw error;
    }
}

export const getLocation = (input: string): string => {
    const locationMap: { [key: string]: string } = {
        Anachronia: 'Anachronia',
        onia: 'Anachronia',
        Asgarnia: 'Asgarnia',
        Asgania: 'Asgarnia',
        rnia: 'Asgarnia',
        Ashdale: 'Ashdale',
        dale: 'Ashdale',
        Crandor: 'Crandor/Karamja',
        amja: 'Crandor/Karamja',
        Daemonheim: 'Daemonheim',
        sula: 'Daemonheim',
        Feldip: 'Feldip Hills',
        ills: 'Feldip Hills',
        Fremennik: 'Fremennik/Lunar Isle',
        unar: 'Fremennik/Lunar Isle',
        Kandarin: 'Kandarin',
        arin: 'Kandarin',
        Desert: 'Kharidian Desert',
        dian: 'Kharidian Desert',
        Grove: 'Lost Grove',
        ost: 'Lost Grove',
        Menaphos: 'Menaphos',
        phos: 'Menaphos',
        Misthalin: 'Misthalin',
        alin: 'Misthalin',
        Morytania: "Morytania/Mos Le'Harmless",
        armless: "Morytania/Mos Le'Harmless",
        Piscatoris: 'Piscatoris/Gnome/Tirannwn',
        nnwn: 'Piscatoris/Gnome/Tirannwn',
        Tuska: 'Tuska',
        uska: 'Tuska',
        Wilderness: 'Wilderness',
        derness: 'Wilderness',
    };

    for (const [key, value] of Object.entries(locationMap)) {
        if (input.includes(key)) {
            return value;
        }
    }

    return 'ERR';
};

export const getTime = (input: string): string => {
    // Extract time after "next" with more flexible pattern
    const nextMatch = input.match(/(?:in the )?next\s+(.*?)\s+to/);

    if (!nextMatch) {
        return '0';
    }

    const timeText = nextMatch[1];

    // Parse hours and minutes
    let totalMinutes = 0;

    // Handle hours
    const hoursMatch = timeText.match(/(\d+)\s+(?:hour|hours)/);
    if (hoursMatch) {
        totalMinutes += parseInt(hoursMatch[1]) * 60;
    }

    // Handle minutes
    const minutesMatch = timeText.match(/(\d+)\s+minutes/);
    if (minutesMatch) {
        totalMinutes += parseInt(minutesMatch[1]);
    }

    // If no hours or minutes found, try to parse as just minutes
    if (totalMinutes === 0) {
        const justMinutes = timeText.match(/(\d+)/);
        if (justMinutes) {
            totalMinutes = parseInt(justMinutes[1]);
        }
    }

    return String(totalMinutes);
};

export const getSize = (input: string): string => {
    const sizeMap: { [key: string]: string } = {
        // Tier 1 telescope sizes
        small: 'Small',
        average: 'Average',
        big: 'Big',
        // Tier 2 telescope sizes (more specific descriptions)
        'very small': 'Small',
        'fairly small': 'Small',
        'fairly big': 'Average',
        'very big': 'Big',
    };

    const sizeTextStart = 'be';
    const startIndex = input.indexOf(sizeTextStart) + 2;
    const searchText = input.substring(startIndex);

    // Check for Tier 3 telescope first (exact size number)
    if (searchText.indexOf('size') === 1) {
        let sizeNumber = searchText.substring(5).replace(/\D/g, '');

        // Handle case where OCR misreads '8' as 'B'
        if (sizeNumber === '') {
            const sizeText = searchText.substring(5).trim();
            if (sizeText.includes('B')) {
                sizeNumber = '8';
            }
        }

        sizeNumber = sizeNumber.trim();

        return sizeNumber;
    }

    // Check for other size descriptions
    for (const [key, value] of Object.entries(sizeMap)) {
        if (searchText.includes(key)) {
            return value;
        }
    }

    return 'ERR';
};
