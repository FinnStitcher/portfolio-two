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
        description: "Lightbox is a blogging website with a minimalist UI and aesthetic, so you can focus on what's important.",
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
    },

    {
        id: "shelter",
        title: "Endless Pawsibilities",
        technologies: [
            "MySQL",
            "Sequelize",
            "Express.js",
            "Handlebars",
            "JavaScript"
        ],
        description: "A mock animal-management tool for shelter employees. I worked on this with two teammates and created the database and assisted with frontend styles and form control.",
        githubLink: "https://github.com/sarameadows/project2",
        deployedLink: "https://project2-sm.herokuapp.com/"
    },

    {
        id: "deep-thoughts",
        title: "Deep Thoughts",
        technologies: [
            "React",
            "React Router",
            "MongoDB",
            "Mongoose",
            "JWT authentication"
        ],
        description: "A social media website wherein users share and react to \"thoughts\" and make friends.",
        githubLink: "https://github.com/FinnStitcher/deep-thoughts-two",
        deployedLink: "https://deep-thoughts-fs.herokuapp.com/"
    },

    {
        id: "pizza",
        title: "Pizza Hunt",
        technologies: [
            "MongoDB",
            "Mongoose",
            "Express.js"
        ],
        description: "On Pizza Hunt, users can upload customized pizzas to the database and have them publically displayed, where they can be discussed in comment threads.",
        githubLink: "https://github.com/FinnStitcher/pizza-hunt",
        deployedLink: "https://pizza-hunt-fs.herokuapp.com/"
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
