import React from 'react';

function About() {
    return (
        <section className="my-3">
            <h1 className="text-center">About Me</h1>

            <div className="d-flex justify-content-center">
                <div className="col-12 col-sm-4 pe-3 me-3 border-right-five">
                    <img className="float-end w-100" alt="Myself" src={require('../../assets/photo.png')} />
                </div>

                <div className="col-12 col-sm-4 py-2">
                    <p>Finn Phillips is a full-stack web developer with a passion for programming. She knows any successful, future-proof app must include a robust, scalable API and database, and loves to see the front-end come to life. Having completed an intense full-stack course, Finn hopes to see her old programming hobby finally become a strong career in the tech sector.</p>
                </div>
            </div>
        </section>
    )
};

export default About;