import React from 'react';
import resumeFile from '../../assets/Resume.pdf';

function Resume() {
	return (
		<section className="my-3">
			<h1 className="text-center">Resume</h1>

			<div>
				<a
					className="d-block m-auto my-3 btn w-fit"
					href={resumeFile}
					download="Finn Phillips Resume"
					target="_blank"
					rel="noreferrer"
                    role="button"
				>
					Download Resume
				</a>

                <h3 className="text-center">Skills</h3>

				<div className="d-flex gap-3 justify-content-center">
					<p>MySQL</p>
					<p>MongoDB</p>
					<p>React</p>
					<p>Express</p>
					<p>GraphQL</p>
				</div>

				<div className="d-flex gap-3 justify-content-center">
					<p>Adaptable</p>
					<p>Observant</p>
					<p>Persistent</p>
				</div>
			</div>
		</section>
	);
}

export default Resume;
