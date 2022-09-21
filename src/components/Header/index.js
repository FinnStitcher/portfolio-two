import React from 'react';

function Header() {
    return (
        <header className="row align-items-center py-2 px-3 bg-two">
            <div className="col-12 col-md-6">
                <h2>Diana Phillips</h2>
            </div>

            <nav className="col-12 col-md-6 text-end">
                <a href="#about">About Me</a>

                <a href="#projects" className="ms-3">Projects</a>

                <a href="#resume" className="ms-3">Resume</a>

                <a href="#contact" className="ms-3">Contact</a>
            </nav>
        </header>
    )
};

export default Header;