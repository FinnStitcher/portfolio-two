import React from 'react';

function Header(props) {
    const {components, currentComp, setCurrentComp} = props;

    function onClickHandler(event) {
        const index = parseInt(event.target.getAttribute('index'));

        if (isNaN(index) === false) {
            setCurrentComp(components[index]);
        } else {
            return false;
        }
    };

    return (
        <header className="row align-items-center py-2 px-3 bg-two">
            <div className="col-12 col-md-6">
                <h2>Finn Phillips</h2>
            </div>

            <nav className="col-12 col-md-6 text-end" onClick={onClickHandler}>
                <a href="#about" className={`${currentComp.href === '#about' && 'nav-active'}`} index="0">About Me</a>

                <a href="#projects" className={`ms-3 ${currentComp.href === '#projects' && 'nav-active'}`} index="1">Projects</a>

                <a href="#resume" className={`ms-3 ${currentComp.href === '#resume' && 'nav-active'}`} index="2">Resume</a>

                <a href="#contact" className={`ms-3 ${currentComp.href === '#contact' && 'nav-active'}`} index="3">Contact</a>
            </nav>
        </header>
    )
};

export default Header;