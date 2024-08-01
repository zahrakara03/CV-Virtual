document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Event Connect',
            description: 'Event Connect is an application designed to simplify booking and organizing events. Users can host their own events and view detailed breakdowns of upcoming events, ensuring they stay informed and well-prepared.',
            link: 'https://github.com/zahrakara03/EventConnect41330595'
        },
        {
            title: 'TextApp',
            description: 'This application enables users to communicate directly by connecting through their IP addresses.',
            link: 'https://github.com/zahrakara03/TextApp'
        },
        {
            title: 'WildWaters',
            description: 'Wildwaters is an application designed for water parks. It manages employee records and bookings, as well as monitors rides and their maintenance schedules.',
            link: 'https://github.com/SrederE777/CMPG-223-Project-WlidWaters'
        },
        {
            title: 'Office Network',
            description: 'This is a Packet Tracer file that demonstrates the network connections within an office, illustrating how all devices are interconnected.',
            link: 'https://github.com/zahrakara03/Packet-Tracer-Office-Network'
        }
        // Add more projects here
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <a href="${project.link}" target="_blank">View on GitHub</a>
            <div class="project-description">${project.description}</div>
        `;
        projectList.appendChild(projectItem);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the active class on the button
            this.classList.toggle('active');
            
            // Get the next element (content) to show or hide
            const content = this.nextElementSibling;
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

