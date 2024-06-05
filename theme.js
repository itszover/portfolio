const Theme = {
    toggle: function (element) {
        element.classList.toggle('dark-theme');

        let theme = 'light';

        if (element.classList.contains('dark-theme')) {
            theme = 'dark';
        }

        localStorage.setItem('theme', theme);
    },

}

export default Theme;

document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    } else if (userPrefersDark) {
        document.body.classList.add('dark-theme');
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
});
