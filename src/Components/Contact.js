import React, { useState } from 'react';

const Contact = ({ data }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [emailSubmited, setEmailSubmited] = useState(false);

	if (data) {
		var contactName = data.name;
		var street = data.address.street;
		var city = data.address.city;
		var state = data.address.state;
		var zip = data.address.zip;
		var phone = data.phone;
		var contactEmail = data.email;
	}

	function isEmail(email) {
		var regex =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

		let temp = regex.test(email);
		console.log('isEmail', temp);
		return temp;
	}

	const submitForm = async (event) => {
		event.preventDefault();
		console.log('event.target.value', event.target.value);
		if (
			name?.trim().length > 0 &&
			email?.trim().length > 0 &&
			isEmail(email) &&
			message.trim().length > 0
		) {
			let url = 'https://hook.eu2.make.com/5ojbusgosyb2dlphjd4y39117egjoo2q';

			let body = JSON.stringify({
				name: name,
				email: email,
				subject: subject || 'without a subject',
				message: message || 'without a message',
			});
			let response = await fetch(url, {
				method: 'post',
				body,
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				setEmailSubmited(true);
			} else {
				setEmailSubmited(false);
				throw new Error('error');
			}
		} else {
			alert('Please fill out all fields');
		}
	};

	/* <div id='message-warning'> Error boy</div>
					<div id='message-success'>
						<i className='fa fa-check'></i>Your message was sent, thank you!
						<br />
					</div> */

	return (
		<section id='contact'>
			<div className='row section-head'>
				<div className='two columns header-col'>
					<div className='email-icon' />
				</div>
				<div className='ten columns'>
					{emailSubmited ? (
						<p className='lead'>
							<i className='fa fa-check'></i> Thank you for your message!{' '}
							<i className='fa fa-smile-o'></i>
							<br />I will conact you soon to answer your question.
						</p>
					) : (
						<p className='lead'>
							Get in touch with me and let me build your web site!
						</p>
					)}
				</div>
			</div>

			<div className='row'>
				<div className='eight columns'>
					{!emailSubmited ? (
						<form onSubmit={submitForm}>
							<fieldset>
								<div>
									<label htmlFor='contactName'>
										Name <span className='required'>*</span>
									</label>
									<input
										type='text'
										value={name}
										size='35'
										id='contactName'
										name='contactName'
										onChange={(e) => setName(e.target.value)}
									/>
								</div>

								<div>
									<label htmlFor='contactEmail'>
										Email <span className='required'>*</span>
									</label>
									<input
										type='email'
										value={email}
										size='35'
										id='contactEmail'
										name='contactEmail'
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div>
									<label htmlFor='contactSubject'>Subject</label>
									<input
										type='text'
										value={subject}
										size='35'
										id='contactSubject'
										name='contactSubject'
										onChange={(e) => setSubject(e.target.value)}
									/>
								</div>

								<div>
									<label htmlFor='contactMessage'>
										Message <span className='required'>*</span>
									</label>
									<textarea
										cols='50'
										rows='9'
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										id='contactMessage'
										name='contactMessage'
									></textarea>
								</div>

								<div>
									<button onClick={submitForm} type='submit' className='submit'>
										Submit
									</button>
								</div>
							</fieldset>
						</form>
					) : (
						<button
							onClick={() => setEmailSubmited(false)}
							type='submit'
							className=''
						>
							Send another message
						</button>
					)}
				</div>

				<aside className='four columns footer-widgets'>
					<div className='widget widget_contact'>
						<h4>Address and Phone</h4>
						<p className='address' style={{ color: '#ddddee' }}>
							{contactName}
							<br />
							{contactEmail}
							<br />
							<br />
							{street} <br />
							{city}, {state} {zip}
							<br />
							<span>{phone}</span>
						</p>
					</div>
				</aside>
			</div>
		</section>
	);
};

export default Contact;
