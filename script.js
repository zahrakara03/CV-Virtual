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
            link: 'https://github.com/zahrakara03/TextApp'
        },
		{
            title: 'Project 3',
            description: 'Description for project 3',
            link: 'https://github.com/SrederE777/CMPG-223-Project-WlidWaters'
        },
		{
            title: 'Project 4',
            description: 'Description for project 4',
            link: 'https://github.com/zahrakara03/Packet-Tracer-Office-Network'
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
