document.addEventListener('DOMContentLoaded', function() {
    const coll = document.getElementsByClassName('collapsible');
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }

    const projects = [
        {
            title: 'Project 1',
            description: 'Description for project 1',
            link: 'https://github.com/zahrakara03/EventConnect41330595'
        },
        {
            title: 'Project 2',
            description: 'Description for project 2',
            link: 'https://github.com/yourusername/project2'
        }
        // Add more projects here
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-box';
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <a href="${project.link}" target="_blank">View on GitHub</a>
            <div class="project-description">${project.description}</div>
        `;
        projectList.appendChild(projectItem);
    });
});
