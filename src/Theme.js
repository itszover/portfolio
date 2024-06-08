const Theme = {
    bodyClassList: document.body.classList,

    toggle: function (force) {
        this.bodyClassList.toggle('dark-theme', force);
        this.save();
    },

    save: function () {
        const theme = this.bodyClassList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    },

    apply: function () {
        const savedTheme = localStorage.getItem('theme');
        const darkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            this.toggle(savedTheme === 'dark');
        } else if (darkPreference) {
            this.bodyClassList.add('dark-theme');
        }
    },
}

export default Theme;