import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="d-flex justify-content-center gap-3 p-3 bg-two">
            <a href="https://github.com/FinnStitcher">
                <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/diana-phillips-518b46238/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://stackoverflow.com">
                <FontAwesomeIcon icon={faStackOverflow} />
            </a>
        </footer>
    )
};

export default Footer;