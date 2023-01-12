import React from 'react';

function Contact() {
	return (
		<section className="my-3 m-auto col-10 col-md-6">
			<h1 className="text-center mb-3">Reach Out</h1>

            <div className="d-flex flex-column text-center dark-links">
                <div>
                    <h3>Email</h3>
                    <p>Contact me at <a href="mailto:foundfootage@protonmail.com">foundfootage@protonmail.com</a>, and I'll get back to you within two days.</p>
                </div>

                <hr className="border-five opacity-75" />
                
                <div>
                    <h3>Phone</h3>
                    <p>Do you need to speak to me right away? Call <a href="tel:19282630337">+1 (928) 263-0337</a> between 10 AM and 8 PM PST, and I'll be happy to talk.</p>
                </div>

                <hr className="border-five opacity-75" />

                <div>
                    <h3>Social Media</h3>
                    <p>You can also reach me on <a href="https://www.linkedin.com/in/finn-phillips-518b46238/">LinkedIn</a>. I'm always open to direct messages.</p>
                </div>
            </div>
		</section>
	);
}

export default Contact;
