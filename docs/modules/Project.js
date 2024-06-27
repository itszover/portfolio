const Project = {
    getAllProjects: async function() {
        const response = await fetch('./data/projects.json');

        if (!response.ok) {
            throw new Error(`An error has occured: ${response.status}`);
        }
        const data = await response.json();
        return data;
    },

    renderProjects: async function() {
        const projects = await this.getAllProjects();
        let html = '';

        for (const key in projects) {
            if (Object.hasOwnProperty.call(projects, key)) {
                const project = projects[key];
                html += `
                <div class="project">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <span><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.shortURL}</a></span>
                </div>
            `; 
            }
        }
        document.querySelector('#project-box').innerHTML = html;
    }

}

export default Project;