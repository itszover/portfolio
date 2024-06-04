import TypeWriter from './TypeWriter.js';

window.addEventListener('load', async function () {
    const arr = ['about', 'about1', 'about2', 'cite'];
    for (const title of arr) {
        const text = await TypeWriter.getText(title);
        await TypeWriter.write(text, title);
    }
});