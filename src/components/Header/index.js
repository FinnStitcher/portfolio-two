import React from 'react';

function Header() {
    return (
        <header className="d-flex align-items-center py-2 px-3 bg-two">
            <div className="w-50">
                <h2>Diana Phillips</h2>
            </div>

            <nav className="w-50 text-end">
                <a href="#about">About Me</a>

                <a href="#projects" className="ms-3">Projects</a>

                <a href="#resume" className="ms-3">Resume</a>

                <a href="#contact" className="ms-3">Contact</a>
            </nav>
        </header>
    )
};

export default Header;