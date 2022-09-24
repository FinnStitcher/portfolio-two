import React from 'react';

const projectsArray = [
    {
        id: "lightbox",
        title: "Lightbox",
        technologies: [
            "Express",
            "Express Session",
            "MySQL",
            "Sequelize",
            "Bcrypt",
            "Handlebars.js",
            "Luxon"
        ],
        description: "Lightbox is a tech-blogging website with a minimalist UI and aesthetic, so you can focus on what's important.",
        githubLink: 'https://github.com/FinnStitcher/lightbox',
        deployedLink: 'https://lightbox-fs.herokuapp.com/'
    },

    {
        id: "weather",
        title: "Weather Dashboard",
        technologies: [
            "jQuery",
            "Moment.js",
            "OpenWeather's OneCall and Geocoding APIs"
        ],
        description: "A streamlined weather app that provides the current weather and a five-day forecast for any city in the United States.",
        githubLink: "https://github.com/FinnStitcher/weather-dashboard",
        deployedLink: "https://finnstitcher.github.io/weather-dashboard/"
    },

    {
        id: "team-profile",
        title: "Team Profile Generator",
        technologies: [
            "Node.js",
            "Inquirer"
        ],
        description: "A command-line application with complex promise-based architecture. Give it your team's info, and it'll generate an HTML page for you.",
        githubLink: "https://github.com/FinnStitcher/team-profile-generator",
        deployedLink: null
    }
];

function Project({projectObj}) {
    const {id, title, technologies, description, githubLink, deployedLink} = projectObj;

    return (
        <div className="col-12 col-md-6 project-width">
            <div className="image-container" id={id}>
            </div>
            
            <div>
                <h4 className="card-title">{title}</h4>

                <p className="subtitle">{technologies.join(', ')}</p>

                {deployedLink ?
                    <p className="dark-links">{description} View it <a href={deployedLink}>live</a> or on <a href={githubLink}>GitHub</a>.</p>
                :
                <p className="dark-links">{description} This application is not available live; view it on <a href={githubLink}>GitHub</a>.</p>}
            </div>
        </div>
    )
};

function Projects() {
    // maybe i should redo this as an array.map?
	return (
		<section>
			<h1 className="text-center">Projects</h1>

			<div className="row justify-content-around gap-4 mx-md-6 my-3">
                {projectsArray.map(element => (
                    <Project key={element.id} projectObj={element} />
                ))}
			</div>
		</section>
	);
}

export default Projects;
