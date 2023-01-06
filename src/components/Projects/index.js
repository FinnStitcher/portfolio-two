import React from 'react';

const projectsArray = [
    {
        id: "apply",
        title: "APPly",
        technologies: [
            "GraphQL",
            "Apollo Express",
            "React",
            "React Router",
            "React Bootstrap",
            "JSON Web Tokens",
            "Mongoose",
            "MongoDB"
        ],
        description: "Finding a new job can be hectic and confusing - that's why APPly is here, to help you keep track of where you are in your search.",
        githubLink: "https://github.com/sarameadows/APPly"
    },

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
        deployedLink: 'http://ec2-13-52-212-160.us-west-1.compute.amazonaws.com'
    },

    {
        id: "libre-library",
        title: "Libre Library",
        technologies: [
            "React",
            "Express",
            "Apollo Express",
            "GraphQL",
            "MongoDB"
        ],
        description: "Search for your favorite books and save them to your personal, digital library, accessible only to you.",
        githubLink: "https://github.com/FinnStitcher/libre-library",
        deployedLink: "https://libre-library-production.up.railway.app/"
    },

    {
        id: "wildfound",
        title: "Wildfound",
        technologies: [
            "Express",
            "Handlebars.js",
            "MySQL",
            "Sequelize",
            "Tailwind"
        ],
        description: "Explore a conservation database through layers of geographic and taxonomic division.",
        githubLink: "https://github.com/FinnStitcher/wildfound",
        deployedLink: "https://wildfound-production.up.railway.app/"
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
        githubLink: "https://github.com/sarameadows/project2"
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
        deployedLink: "https://deep-thoughts-two-production.up.railway.app/"
    }
];

function Project({projectObj}) {
    const {id, title, technologies, description, githubLink, deployedLink} = projectObj;

    return (
        <div className="col-12 col-md-6 project-width my-3">
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
