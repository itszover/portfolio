import TypeWriter from './TypeWriter.js';
import Theme from './Theme.js';

const App = {
    theme: document.querySelector('#theme-toggle'),

    init: async function () {
        Theme.apply();
        
        this.theme.addEventListener('click', function () {
            Theme.toggle();
        });

        const titles = ['about', 'about1', 'about2', 'cite'];
        for (const title of titles) {
            const text = await TypeWriter.getText(title);
            await TypeWriter.write(text, title);
        }
    },    
};

App.init();