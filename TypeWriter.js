const TypeWriter = {
    getAllText: async function() {
        const response = await fetch('./text.json');
        const data = await response.json();
        return data;
    },

    write: function(txt, id, speed=60) {
        return new Promise((resolve, reject) => {
            const element = document.getElementById(id);
            for (let i = 0; i < txt.length; i++) {
                setTimeout(() => {
                    element.textContent += txt.charAt(i);
                    if (i === txt.length - 1) {
                        this.index = 0;
                        resolve();
                    }
                }, i * speed);
            }
        });
    }
}

export default TypeWriter;