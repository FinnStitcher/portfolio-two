import React from 'react';

function About() {
    return (
        <section className="my-3">
            <h1 className="text-center">About Me</h1>

            <div className="d-flex justify-content-center">
                <div className="col-12 col-sm-4 pe-3 me-3 border-right-five">
                    <img className="float-end" alt="placeholder" src="https://via.placeholder.com/200" />
                </div>

                <div className="col-12 col-sm-4 py-2">
                    <p>Description of myself goes here. :)</p>
                </div>
            </div>
        </section>
    )
};

export default About;