// this is legacy code currently not in use
import React, {useState} from 'react';
import { validateEmail, toSentenceCase } from '../../utils/helpers';

function ContactForm() {
    const [formInput, setFormInput] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [error, setError] = useState('');

	function handleChange(e) {
        if (!e.target.value.length) {
            setError(`${toSentenceCase(e.target.name)} is required.`);
        } else if (e.target.name === 'email') {
            if (!validateEmail(e.target.value)) {
                setError('Email is invalid.');
            };
        } else {
            setError('');
        };

		if (!error) {
			setFormInput({
				...formInput,
				[e.target.name]: e.target.value
			});
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
        
        console.log(formInput);
	}
    
    return (
        <form onSubmit={handleSubmit}>
				<div className="mb-2">
					<label className="form-label mb-1" htmlFor="name">
						Name:
					</label>
					<input
						type="text"
						name="name"
						className="form-control"
						placeholder="John Doe"
						onBlur={handleChange}
					/>
				</div>

				<div className="mb-2">
					<label className="form-label mb-1" htmlFor="email">
						Email:
					</label>
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="jdoe97@yahoo.com"
						onBlur={handleChange}
					/>
				</div>

				<div className="mb-2">
					<label className="form-label mb-1" htmlFor="message">
						Your message:
					</label>
					<textarea
						name="message"
						rows="5"
						className="form-control"
						placeholder="I'm writing to you to say..."
						onBlur={handleChange}
					></textarea>
				</div>

				{error ? <p>{error}</p> : null}

				<button className="d-block m-auto my-3 btn" type="submit">
					Submit
				</button>
			</form>
    )
};

export default ContactForm;