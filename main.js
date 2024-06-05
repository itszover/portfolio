import TypeWriter from './TypeWriter.js';
import Theme from './theme.js';

document.addEventListener('DOMContentLoaded', async function () {
    const arr = ['about', 'about1', 'about2', 'cite'];
    for (const title of arr) {
        const text = await TypeWriter.getText(title);
        await TypeWriter.write(text, title);
    }
});

document.addEventListener('click', function (event) {
    if (event.target.class === 'theme-toggle') {
        Theme.toggle(document.body);
    }
});