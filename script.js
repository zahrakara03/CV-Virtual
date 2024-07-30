document.addEventListener('DOMContentLoaded', function() {
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
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;
        projectList.appendChild(projectItem);
    });
});
