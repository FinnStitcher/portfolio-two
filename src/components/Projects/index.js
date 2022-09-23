import React from 'react';

function Projects() {
    // maybe i should redo this as an array.map?
	return (
		<section>
			<h1 className="text-center">Projects</h1>

			<div className="row justify-content-around gap-4 mx-md-6 my-3">
				<div className="col-12 col-md-6 project-width">
					<div className="bg-four" style={{ height: '100px' }}></div>

					<div>
						<h4 className="card-title">Title of Project</h4>
						<p className="subtitle">Technologies</p>

						<p>Brief description</p>
					</div>
				</div>

				<div className="col-12 col-md-6 project-width">
					<div className="bg-four" style={{ height: '100px' }}></div>

					<div>
						<h4 className="card-title">Title of Project</h4>
						<p className="subtitle">Technologies</p>

						<p>Brief description</p>
					</div>
				</div>

				<div className="col-12 col-md-6 project-width">
					<div className="bg-four" style={{ height: '100px' }}></div>

					<div>
						<h4 className="card-title">Title of Project</h4>
						<p className="subtitle">Technologies</p>

						<p>Brief description</p>
					</div>
				</div>

				<div className="col-12 col-md-6 project-width">
					<div className="bg-four" style={{ height: '100px' }}></div>

					<div>
						<h4 className="card-title">Title of Project</h4>
						<p className="subtitle">Technologies</p>

						<p>Brief description</p>
					</div>
				</div>

				<div className="col-12 col-md-6 project-width">
					<div className="bg-four" style={{ height: '100px' }}></div>

					<div>
						<h4 className="card-title">Title of Project</h4>
						<p className="subtitle">Technologies</p>

						<p>Brief description</p>
					</div>
				</div>

				<div className="col-12 col-md-6 project-width">
					<div className="bg-four" style={{ height: '100px' }}></div>

					<div>
						<h4 className="card-title">Title of Project</h4>
						<p className="subtitle">Technologies</p>

						<p>Brief description</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
