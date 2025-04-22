import * as a1lib from 'alt1';
import './index.html';
import './appconfig.json';
import './icon.png';
import './styles.css';
import DialogReader from 'alt1/dialog';

import {
    copyToClipboard,
    getLocation,
    getSize,
    getTime,
    recognizeTextFromImage,
} from './utils';

var output = document.getElementById('output');
var logs = document.getElementById('logs');

output.insertAdjacentHTML('beforeend', `<div class="version">v. 1.1.1</div>`);

if (window.alt1) {
    alt1.identifyAppUrl('./appconfig.json');

    output.insertAdjacentHTML(
        'beforeend',
        `<div class="nisbutton" onclick="StarScopeCall.capture();">Get "/call" command</div>`
    );
} else {
    let addappurl = `alt1://addapp/${new URL('./appconfig.json', document.location.href).href}`;

    output.insertAdjacentHTML(
        'beforeend',
        `<a href='${addappurl}' class="app-link">
            <div class="nisbutton">Alt1 not detected, click here to add this app to Alt1</div>
        </a>`
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

    if (
        !alt1.permissionPixel ||
        !alt1.permissionGameState ||
        !alt1.permissionOverlay
    ) {
        output.insertAdjacentHTML(
            'beforeend',
            `<div class="text-center">Page is not installed as app or not all permissions are enabled</div>`
        );

        return;
    }

    var img = a1lib.captureHoldFullRs();

    findDialogAndReadData(img);
}

async function findDialogAndReadData(img: a1lib.ImgRef) {
    const start = new Date().getTime();

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
        console.error(err);
        logs.innerHTML = '';

        logs.insertAdjacentHTML(
            'beforeend',
            `<div class="error text-center">Please use a telescope in order to have data to read from!</div>`
        );

        return;
    }

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

    const command = `/call world: ${world} region: ${location} size: ${size} relative-time: ${time}`;

    console.log(`Command: ${command}`);

    logs.innerHTML = '';

    const copySuccess = await copyToClipboard(command);

    if (copySuccess) {
        logs.insertAdjacentHTML(
            'beforeend',
            `<div class="text-center margin-bottom-5 success">Command copied to clipboard!</div>
            <div class="text-center bold">${command}</div>`
        );
    } else {
        logs.insertAdjacentHTML(
            'beforeend',
            `<div class="text-center margin-bottom-5 error">Failed to copy to clipboard. Please notify dev and copy manually:</div>
            <div class="text-center bold">${command}</div>`
        );
    }

    const end = new Date().getTime();
    console.log(`Time taken: ${end - start} milliseconds`);
    console.log(
        `---------------------------------------------------------------------------------------------------------------------`
    );
}
