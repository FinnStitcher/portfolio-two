import React from 'react';

function About() {
    return (
        <section className="my-3">
            <h1 className="text-center">About Me</h1>

            <div className="d-flex justify-content-center">
                <div className="col-12 col-sm-5 pe-2 me-2 bg-two" style={{height: '200px'}}>
                </div>

                <div className="col-12 col-sm-5">
                    <p>Description of myself goes here. :)</p>
                </div>
            </div>
        </section>
    )
};

export default About;