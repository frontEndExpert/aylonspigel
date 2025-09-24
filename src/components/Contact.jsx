import React, { useState } from 'react';

const Contact = ({ data }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	//const [contactPhone, setContactPhone] = useState('');
	const [primaryNeed, setNeed] = useState('');
	const [budget, setBudget] = useState('');
	const [subject, setSubject] = useState('I have a question');
	const [message, setMessage] = useState('');
	const [emailSubmited, setEmailSubmited] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	if (data) {
		var contactName = data.main?.name;
		var street = data.main?.address?.street;
		var city = data.main?.address?.city;
		var state = data.main?.address?.state;
		var zip = data.main?.address?.zip;
		var phone = data.main?.phone;
		var contactEmail = data.main?.email;
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
		
		if (isSubmitting) return; // Prevent multiple submissions
		
		console.log('event.target.value', event.target.value);
		if (
			name?.trim().length > 0 &&
			email?.trim().length > 0 &&
			isEmail(email) &&
			budget &&
			primaryNeed &&
			message.trim().length > 0
		) {
			setIsSubmitting(true);
			
			//let url = 'https://business4u.app.n8n.cloud/webhook-test/form-submission'; // test url
			let url = 'https://business4u.app.n8n.cloud/webhook/form-submission'; // production url
			//let url = 'https://hook.eu2.make.com/q75ntfikofa2s673z4577qf1lgemoiyx'; // production url
			//let url = 'https://hook.eu2.make.com/s5nl9u6801l5sp6s41v0mr4ya4ujdvwc';

			let body = JSON.stringify({
				name: name,
				email: email,
				primaryNeed: primaryNeed,
				budget: budget,
				message: message || 'without a message',
			});

			try {
				console.log('Sending form data:', body);
				let response = await fetch(url, {
					method: 'POST',
					body,
					headers: {
						'Content-Type': 'application/json',
					},
					mode: 'cors',
				});
				
				
				if (response.ok) {
					setEmailSubmited(true);
					console.log('Form submitted successfully');
				} else {
					const errorText = await response.text();
					console.error('Server error:', response.status, errorText);
					alert(`Server error: ${response.status}. Please try again later.`);
				}
			} catch (error) {
				console.error('Fetch error:', error);
				alert(`Network error: ${error.message}. Please check your internet connection and try again.`);
			} finally {
				setIsSubmitting(false);
			}
		} else {
			alert('Please fill out all required fields');
		}
	};

	return (
		<section id='contact' className="py-20 pt-1 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16 -mt-16 flex flex-col items-center justify-center">
						
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							{data?.contact?.ready} <br/>
							{data?.contact?.message} <br/>
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-12 items-stretch">
						{/* Contact Form */}
						<div className="lg:col-span-2">
							{emailSubmited ? (
								<div className="bg-white rounded-2xl p-8 shadow-xl text-center">
									<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
										<svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										{data?.contact?.thankYou}
									</h3>
									<p className="text-gray-600 mb-6">
										{data?.contact?.contactYou}
									</p>
									<button
										onClick={() => setEmailSubmited(false)}
										className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
									>
										{data?.contact?.sendAnother}
									</button>
								</div>
							) : (
								<div className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700">
									<h2 className="text-2xl font-bold text-white mb-6">{data?.contact?.sendMessage}</h2>
									<form onSubmit={submitForm} className="space-y-4">
										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<label htmlFor='contactName' className="block text-sm font-medium text-cyan-300 mb-1">
													{data?.contact?.name} <span className='text-red-400'>*</span>
												</label>
												<input
													type='text'
													value={name}
													id='contactName'
													name='contactName'
													onChange={(e) => setName(e.target.value)}
													className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-slate-400 transition-all duration-200"
													placeholder="Your full name"
												/>
											</div>

											<div>
												<label htmlFor='contactEmail' className="block text-sm font-medium text-cyan-300 mb-1">
													{data?.contact?.email} <span className='text-red-400'>*</span>
												</label>
												<input
													type='email'
													value={email}
													id='contactEmail'
													name='contactEmail'
													onChange={(e) => setEmail(e.target.value)}
													className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-slate-400 transition-all duration-200"
													placeholder="your.email@example.com"
												/>
											</div>
										</div>

										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<label htmlFor='primaryNeed' className="block text-sm font-medium text-cyan-300 mb-1">
													{data?.contact?.primaryNeed} <span className='text-red-400'>*</span>
												</label>
												<select
													value={primaryNeed}
													id='primaryNeed'
													name='primaryNeed'
													onChange={(e) => setNeed(e.target.value)}
													className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white transition-all duration-200"
													required
												>
													{Object.entries(data?.contact?.primaryNeedOptions || {
														"other": "Something Else",
														"automation": "Automation & Workflows",
														"api-integration": "API Integration",
														"web-development": "Web Development & Fixes",
														"video": "Promotional Video",
														"ai-video-robot": "AI Video"
													}).map(([value, label]) => (
														<option key={value} value={value}>{label}</option>
													))}
												</select>
											</div>
											<div>
												<label htmlFor="budget" className="block text-sm font-medium text-cyan-300 mb-1">
													{data?.contact?.budget} <span className='text-red-400'>*</span>
												</label>
												<select 
													id="budget" 
													name="budget" 
													onChange={(e) => setBudget(e.target.value)}
													className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white transition-all duration-200"
													required
												>
													{Object.entries(data?.contact?.budgetOptions || {
														"under-1000": "Under $1,000",
														"1000-5000": "$1,000 - $5,000",
														"5000-plus": "$5,000+",
														"need-quote": "I need a quote first"
													}).map(([value, label]) => (
														<option key={value} value={value}>{label}</option>
													))}
												</select>
											</div>
										</div>

									

										<div>
											<label htmlFor='contactMessage' className="block text-sm font-medium text-cyan-300 mb-1">
												{data?.contact?.messageText} <span className='text-red-400'>*</span>
											</label>
											<textarea
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												id='contactMessage'
												name='contactMessage'
												rows={4}
												className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-slate-400 transition-all duration-200 resize-none"
												placeholder="Tell me about your project..."
											></textarea>
										</div>

										<button 
											onClick={submitForm} 
											type='submit' 
											disabled={isSubmitting}
											className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border ${
												isSubmitting 
													? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
													: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 border-cyan-400/30'
											}`}
										>
							{isSubmitting ? data?.contact?.sending : data?.contact?.send }
										</button>
									</form>
								</div>
							)}
						</div>

						{/* Contact Information */}
						<aside className="lg:col-span-1 flex">
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-white flex flex-col w-full">
								<h3 className="text-2xl font-bold mb-6">{data?.contactInformation}</h3>
								
								<div className="space-y-6 flex-grow">
									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
											</svg>
										</div>
										<div>
										<h4 className="font-semibold">{data?.contact?.name}</h4>
											<h4 className="font-semibold">{contactName}</h4>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
										<div>
											<h4 className="font-semibold">{data?.contact?.email}</h4>
											<p className="text-gray-300">{contactEmail}</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div>
											<h4 className="font-semibold">{data?.contact?.phone}</h4>
											<p className="text-gray-300">{phone}</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</div>
										<div>
											<h4 className="font-semibold">{data?.contact?.location}</h4>
											<p className="text-gray-300">{city}, {state} {zip}</p>
										</div>
									</div>
								</div>

								{/* Quick Response Promise */}
								<div className="mt-auto p-4 bg-white/10 rounded-lg border border-white/20">
									<div className="flex items-center space-x-3">
										<svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<span className="text-sm">{data?.contact?.response}</span>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
