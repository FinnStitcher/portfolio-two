import React from 'react';

const projectsArray = [
    {
        id: "wildfound",
        title: "Wildfound",
        technologies: [
            "MySQL",
            "Node.js",
            "Express.js",
            "Handlebars.js",
            "Amazon RDS",
            "Sequelize",
            "Tailwind",
        ],
        description: "Explore a conservation database through layers of geographic and taxonomic division.",
        isSolo: true,
        role: "Full-stack Developer",
        githubLink: "https://github.com/FinnStitcher/wildfound",
        deployedLink: "https://wildfound-production.up.railway.app/"
    },

    {
        id: "lightbox",
        title: "Lightbox",
        technologies: [
            "MySQL",
            "Node.js",
            "Express.js",
            "Express Session",
            "Handlebars.js",
            "Amazon EC2",
            "Sequelize",
            "Bcrypt",
            "Luxon"
        ],
        description: "Lightbox is a blogging website with a minimalist UI and aesthetic, so you can focus on what's important.",
        isSolo: true,
        role: "Full-stack Developer",
        githubLink: 'https://github.com/FinnStitcher/lightbox',
        deployedLink: 'http://ec2-13-52-212-160.us-west-1.compute.amazonaws.com'
    },

    {
        id: "libre-library",
        title: "Libre Library",
        technologies: [
            "MongoDB",
            "GraphQL",
            "Node.js",
            "Express.js",
            "React",
            "Apollo Express",
            "Mongoose"
        ],
        description: "Search for your favorite books and save them to your personal, digital library, accessible only to you.",
        isSolo: false,
        role: "GraphQL and ODM Developer, Bugfixer",
        githubLink: "https://github.com/FinnStitcher/libre-library",
        deployedLink: "https://libre-library-production.up.railway.app/"
    },

    {
        id: "apply",
        title: "APPly",
        technologies: [
            "MongoDB",
            "GraphQL",
            "Node.js",
            "Express.js",
            "React",
            "React Router",
            "React Bootstrap",
            "Apollo Express",
            "Mongoose",
            "JSON Web Tokens"
        ],
        description: "Finding a new job can be hectic and confusing - that's why APPly is here, to help you keep track of where you are in your search.",
        isSolo: false,
        role: "GraphQL Developer, ORM Creator, Bugfixer",
        githubLink: "https://github.com/sarameadows/APPly"
    },

    // {
    //     id: "shelter",
    //     title: "Endless Pawsibilities",
    //     technologies: [
    //         "MySQL",
    //         "Sequelize",
    //         "Express.js",
    //         "Handlebars",
    //         "JavaScript"
    //     ],
    //     description: "A mock animal-management tool for shelter employees. I worked on this with two teammates and created the database and assisted with frontend styles and form control.",
    //     githubLink: "https://github.com/sarameadows/project2"
    // },

    {
        id: "deep-thoughts",
        title: "Deep Thoughts",
        technologies: [
            "MongoDB",
            "GraphQL",
            "Node.js",
            "Express.js",
            "React",
            "React Router",
            "Apollo Express",
            "Mongoose",
            "JSON Web Tokens"
        ],
        description: "A social media website wherein users share and react to \"thoughts\" and make friends.",
        isSolo: false,
        role: "GraphQL Developer, Client Integration",
        githubLink: "https://github.com/FinnStitcher/deep-thoughts-two",
        deployedLink: "https://deep-thoughts-two-production.up.railway.app/"
    }
];

function Project({projectObj}) {
    const {id, title, technologies, description, isSolo, role, githubLink, deployedLink} = projectObj;

    return (
        <div className="col-12 col-md-6 project-width my-3">
            <div className="image-container" id={id}>
            </div>
            
            <div>
                <h4 className="card-title">{title}</h4>

                <p className="subtitle">{technologies.join(', ')}</p>

                <p className="mb-2"><b>{role}</b> {isSolo ? ' || Solo Project' : null}</p>

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
		<section className="my-3">
			<h1 className="text-center mb-3">Projects</h1>

			<div className="row justify-content-around gap-4 mx-md-6 my-3">
                {projectsArray.map(element => (
                    <Project key={element.id} projectObj={element} />
                ))}
			</div>
		</section>
	);
}

export default Projects;
