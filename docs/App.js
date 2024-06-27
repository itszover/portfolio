import Text from './modules/Text.js';
import Theme from './modules/Theme.js';
import Project from './modules/Project.js';

const App = {
    init: async function () {
        Theme.apply();
        Project.render();
        
        const themeToggle = document.querySelector('#theme-toggle');

        themeToggle.addEventListener('click', () => {
            Theme.toggle();
        });

        const texts = await Text.getAll();

        for (const key in texts) {
            if (Object.hasOwnProperty.call(texts, key)) {
                await Text.write(texts[key], key);
            }
        }
    },    
};

App.init();