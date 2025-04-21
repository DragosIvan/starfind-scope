import { createWorker } from 'tesseract.js';

export async function recognizeTextFromImage(image: Blob) {
    try {
        // Create a Tesseract worker with explicit paths
        const worker = await createWorker('eng', 1, {
            workerPath: '/workers/worker.min.js', // Path to the worker script in your output
            corePath: '/core/tesseract-core.wasm.js', // Path to the core script
            langPath: '/tesseract_data/', // Language data (or host locally)
        });

        // Recognize text from the base64 image
        const {
            data: { text },
        } = await worker.recognize(image);

        // Terminate the worker
        await worker.terminate();

        return text;
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
    // Normalize the input string
    input = input.replace('t0', 'to');

    // Ensure proper spacing around 'to' and 'minutes'
    input = input
        .replace(/(\d)to(\d)/g, '$1 to $2')
        .replace(/(\d)minutes/g, '$1 minutes');

    // Extract time range if present
    const timeRangeMatch = input.match(/(\d+)\s+to\s+(\d+)/);
    if (timeRangeMatch) {
        const [_, start, end] = timeRangeMatch;
        const startNum = parseInt(start);
        const endNum = parseInt(end);

        // Handle case where first number might be misread (e.g., 120 to 30)
        if (startNum > endNum && startNum > 100) {
            return `${Math.floor(startNum / 10)} to ${endNum}`;
        }
        return `${startNum} to ${endNum}`;
    }

    // Extract time after "next"
    const nextMatch = input.match(/next\s+(.*?)\s+to/);
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
        const sizeNumber = searchText.substring(5).replace(/\D/g, '');
        return sizeNumber.trim();
    }

    // Check for other size descriptions
    for (const [key, value] of Object.entries(sizeMap)) {
        if (searchText.includes(key)) {
            return value;
        }
    }

    return 'ERR';
};
