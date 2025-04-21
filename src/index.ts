import * as a1lib from 'alt1';
import './index.html';
import './appconfig.json';
import './icon.png';
import './styles.css';
import DialogReader from 'alt1/dialog';

import { getLocation, getSize, getTime, recognizeTextFromImage } from './utils';

var output = document.getElementById('output');
var logs = document.getElementById('logs');

output.insertAdjacentHTML('beforeend', `<div class="version">v. 1.0.3</div>`);

if (window.alt1) {
    alt1.identifyAppUrl('./appconfig.json');
} else {
    let addappurl = `alt1://addapp/${new URL('./appconfig.json', document.location.href).href}`;

    output.insertAdjacentHTML(
        'beforeend',
        `<div class="text-center">Alt1 not detected, click <a href='${addappurl}'>here</a> to add this app to Alt1</div>`
    );
}

export function capture() {
    if (!window.alt1) {
        output.insertAdjacentHTML(
            'beforeend',
            `<div class="text-center">You need to run this page in alt1 to capture the screen</div>`
        );
        return;
    }
    if (!alt1.permissionPixel) {
        output.insertAdjacentHTML(
            'beforeend',
            `<div class="text-center">Page is not installed as app or capture permission is not enabled</div>`
        );
        return;
    }

    var img = a1lib.captureHoldFullRs();

    findDialogAndReadData(img);
}

async function copyToClipboard(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        } else {
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
                return false;
            }
        }
    } catch (err) {
        console.error('Failed to copy to clipboard:', err);
        return false;
    }
}

async function findDialogAndReadData(img: a1lib.ImgRef) {
    logs.innerHTML = '<div class="spinner"></div>';

    let pixels: ImageData;

    try {
        const diagReader = new DialogReader();
        const dialog: a1lib.RectLike = diagReader.find() as a1lib.RectLike;

        pixels = img.toData(
            dialog.x,
            dialog.y + 20,
            dialog.width,
            dialog.height - 40
        );
    } catch (err) {
        logs.innerHTML = '';

        logs.insertAdjacentHTML(
            'beforeend',
            `<div class="text-center">Please use a telescope in order to have data to read from!</div>`
        );

        return;
    }

    // log.insertAdjacentElement('beforeend', pixels.toImage());

    const pngImage = await pixels.toFileBytes('image/png');

    let text = await recognizeTextFromImage(
        new Blob([pngImage], { type: 'image/png' })
    );

    // let text = `You see a shooting star!
    //             The star looks like itwill land in The Lost Grove in the next 10 12 minutes.
    //             The star looks to be size 4,`;

    console.log(text);

    const world = alt1.currentWorld;
    const location = getLocation(text);
    const size = getSize(text);
    const time = getTime(text);

    console.log(
        'Command: ',
        `/call world: ${world} region: ${location} size: ${size} relative-time: ${time}`
    );

    const command = `/call world: ${world} region: ${location} size: ${size} relative-time: ${time}`;

    logs.innerHTML = '';

    const copySuccess = await copyToClipboard(command);

    if (copySuccess) {
        logs.insertAdjacentHTML(
            'beforeend',
            `<div class="text-center margin-bottom-5">Command copied to clipboard!</div>
            <div class="text-center bold">${command}</div>`
        );
    } else {
        logs.insertAdjacentHTML(
            'beforeend',
            `<div class="text-center margin-bottom-5 error">Failed to copy to clipboard. Please try again or copy manually:</div>
            <div class="text-center bold">${command}</div>`
        );
    }
}

output.insertAdjacentHTML(
    'beforeend',
    `<div class="nisbutton" onclick="StarScopeCall.capture();">Get "/call" command</div>`
);
