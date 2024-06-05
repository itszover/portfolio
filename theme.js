const Theme = {
    bodyClassList: document.body.classList,
    savedTheme: localStorage.getItem('theme'),
    darkPreference: window.matchMedia('(prefers-color-scheme: dark)').matches,

    toggle: function () {
        this.bodyClassList.toggle('dark-theme');
        this.save();
    },

    save: function () {
        const theme = this.bodyClassList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    },

    apply: function () {
        if (this.savedTheme) {
            this.bodyClassList.toggle('dark-theme', this.savedTheme === 'dark');
        } else if (this.darkPreference) {
            this.bodyClassList.add('dark-theme');
        }
    },
}

export default Theme;