import React, {useState} from 'react';
import Image from 'next/image';

const Business = ({ data }) => {
	const [pic, setPic] = useState(0);

	if (data) {
		var name = data.name;
		var profilepic = '/static/images/' + data.image;
		var street = data.address.street;
		var city = data.address.city;
		var state = data.address.state;
		var zip = data.address.zip;
		var phone = data.phone;
		var email = data.email;
		var resumeDownload = data.resumedownload;
	}

	const pictures=['doctor6.png','Inanna.jpg','slaves1.jpg','landing3.png','logo1.png','townhead.png']

	function waitXSeconds(x) {
		return new Promise(resolve => {
		  setTimeout(() => {
			resolve();
		  }, x * 1000);
		});
	  }

	  function getImage() {
		var pic = 0;
		return pictures[pic];
	  }

	return (
		<section id='about' className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							What to Expect
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
					</div>

					<div className="grid lg:grid-cols-3 gap-12 items-start">
						{/* Profile Image */}
						<div className="lg:col-span-1 flex justify-center lg:justify-start">
							<div className="relative group">
								<div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
								<Image
									className='profile-pic rounded-full relative ring-4 ring-white/20 shadow-2xl'
									src={profilepic || '/static/images/aylon.png'}
									alt="Aylon's Profile Pic"
									width={200}
									height={200}
								/>
							</div>
						</div>

						{/* Main Content */}
						<div className="lg:col-span-2">
							<div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Specializing in Harnessing the Power of AI for Exceptional Web Design, Automation, and Visuals
								</h3>
								
								<div className="space-y-4 text-gray-700 leading-relaxed">
									<p>
										At the forefront of AI technology, I bring you unparalleled expertise in crafting compelling web designs, seamless automation, and visually stunning content. My specialization extends to AI conversational design and cutting-edge chatbots, with a particular emphasis on promoting the unique and highly engaging video chat bot—a proven lead magnet for superior results.
									</p>
									
									<p>
										Understanding that each business is unique, I offer bespoke solutions tailored to your specific needs. For a deeper understanding of your requirements and a customized solution proposal, don&apos;t hesitate to reach out. Let&apos;s elevate your business through the strategic integration of AI tools.
									</p>
								</div>

								{/* CTA Button */}
								<div className="mt-8">
									<a 
										href="#contact" 
										className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
									>
										Book an Appointment
										<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
										</svg>
									</a>
								</div>
							</div>

							{/* Video Showcase */}
							<div className="mt-12">
								<div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
									<h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Featured AI Work</h4>
									<div className="flex justify-center">
										<div className="relative group overflow-hidden rounded-xl">
											<video 
												src="/static/images/beach.mp4" 
												width={500} 
												height={300} 
												className="pic transition-transform duration-500 group-hover:scale-105" 
												autoPlay
												muted
												loop
												playsInline
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Details */}
					<div className="mt-16">
						<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
							<h3 className="text-2xl font-bold mb-6 text-center">Contact Details</h3>
							<div className="grid md:grid-cols-2 gap-8">
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
										<span className="font-medium">{name}</span>
									</div>
									<div className="flex items-center space-x-3">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<span>{city}, {state} {zip}</span>
									</div>
								</div>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
										<span>{phone}</span>
									</div>
									<div className="flex items-center space-x-3">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										<span>{email}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Business;
