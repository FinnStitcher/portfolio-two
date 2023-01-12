import React from 'react';
import resumeFile from '../../assets/Resume.pdf';

function About() {
    return (
        <section className="mb-3 mt-4">
            <div className="d-flex flex-wrap justify-content-center m-2 m-sm-0">
                <div className="col-12 col-md-4 pe-md-3 me-md-3 border-right-five">
                    <img className="float-end w-100 rounded-5 border-one" alt="Myself" src={require('../../assets/photo.png')} />
                </div>

                <div className="col-12 col-md-4 py-2">
                    <div className="mb-md-5">
                        <h1>Warm regards.</h1>

                        <p>I'm Finn. I like to code.</p>
                        
                        <p>I'm a full-stack web developer and software engineer. I specialize in Node.js, MongoDB, and MySQL, but I know my way around the entire MERN stack, and I am always willing to learn. I love working with servers and databases, and I know that any successful, future-proof application requires a robust API.</p>                        
                    </div>

                    <div className="d-flex flex-wrap mb-3 gap-2">
                        <p className="bg-two text-light rounded-pill px-2 mb-0">MySQL</p>
                        <p className="bg-two text-light rounded-pill px-2 mb-0">MongoDB</p>
                        <p className="bg-two text-light rounded-pill px-2 mb-0">GraphQL</p>
                        <p className="bg-two text-light rounded-pill px-2 mb-0">Node.js</p>
                        <p className="bg-two text-light rounded-pill px-2 mb-0">Express.js</p>
                        <p className="bg-two text-light rounded-pill px-2 mb-0">React.js</p>
                        <p className="bg-two text-light rounded-pill px-2 mb-0">Amazon Web Services</p>
                        <p className="bg-two text-light rounded-pill px-2 mb-0">User Sessions</p>
                        <p className="bg-two text-light rounded-pill px-2 mb-0">JSON Web Tokens</p>
                    </div>

                    <div className="d-flex flex-wrap gap-2">
                        <p className="bg-five text-light rounded-pill px-2 mb-0">Adaptability</p>
                        <p className="bg-five text-light rounded-pill px-2 mb-0">Observation</p>
                        <p className="bg-five text-light rounded-pill px-2 mb-0">Collaboration</p>
                        <p className="bg-five text-light rounded-pill px-2 mb-0">Problem-Solving</p>
                        <p className="bg-five text-light rounded-pill px-2 mb-0">Persistence</p>
                        <p className="bg-five text-light rounded-pill px-2 mb-0">Desire to Learn</p>
                        <p className="bg-five text-light rounded-pill px-2 mb-0">Drive to Succeed</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <a
                        className="d-block m-auto my-3 btn col-8 col-md-3"
                        href={resumeFile}
                        download="Finn Phillips Resume"
                        target="_blank"
                        rel="noreferrer"
                        role="button"
                    >
                        Download my resume.
                    </a>
			    </div>
            </div>
        </section>
    )
};

export default About;