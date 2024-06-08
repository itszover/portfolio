import TypeWriter from './TypeWriter.js';
import Theme from './Theme.js';

const App = {
    init: async function () {
        Theme.apply();
        
        const themeToggle = document.querySelector('#theme-toggle');

        themeToggle.addEventListener('click', () => {
            Theme.toggle();
        });

        const texts = await TypeWriter.getAllText();

        for (const key in texts) {
            if (Object.hasOwnProperty.call(texts, key)) {
                await TypeWriter.write(texts[key], key);
            }
        }
    },    
};

App.init();