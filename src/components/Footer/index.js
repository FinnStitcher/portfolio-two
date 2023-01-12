import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="d-flex justify-content-between py-2 px-5 bg-two">
            <div className="d-flex gap-3 bg-two footer-social-links">
                <a href="https://github.com/FinnStitcher">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://www.linkedin.com/in/finn-phillips-518b46238/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href="https://stackoverflow.com/users/18958537/finn-phillips">
                    <FontAwesomeIcon icon={faStackOverflow} />
                </a>                
            </div>

            <div>
                <address className="d-flex flex-row  gap-3 footer-contact-links mb-0 p-2">
                    <p className="mb-0">
                        <a href="mailto:foundfootage@protonmail.com">Email</a>
                    </p>

                    <p className="mb-0">
                        <a href="tel:19282630337">Phone</a>
                    </p>
                </address>
            </div>
        </footer>
    )
};

export default Footer;