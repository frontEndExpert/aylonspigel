import React from 'react';
import Image from 'next/image';

const Business = ({ data }) => {
	// Extract data with fallbacks
	const name = data?.name || 'Aylon Spigel';
	const profilepic = data?.image ? '/static/images/' + data.image : '/static/images/aylon.png';
	const city = data?.address?.city || 'Your City';
	const state = data?.address?.state || 'Your State';
	const zip = data?.address?.zip || 'Your ZIP';
	const phone = data?.phone || 'Your Phone';
	const email = data?.email || 'your@email.com';

	return (
		<section id='services' className="py-8 sm:py-12 lg:py-16 bg-brand-neutral w-full">
			<div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
				{/* Section Header */}
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary-dark mb-4 sm:mb-6 leading-tight">
						How I Help Businesses
					</h2>
					<p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
						I provide specialized solutions to automate workflows, integrate your tools, and solve complex web development challenges, saving you time and money.
					</p>
					<div className="w-24 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent mx-auto rounded-full mt-6"></div>
				</div>

				{/* Services Flex Container */}
				<div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-none">
					{/* Service Card 1: AI Lead Qualifier */}
					<div className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
						<div className="p-8">
							<div className="flex items-center justify-center w-16 h-16 bg-brand-secondary/20 rounded-2xl mb-6">
								<svg className="w-8 h-8 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className="text-xl sm:text-2xl font-bold text-brand-primary-dark mb-4 leading-tight">
								AI-Powered Lead Qualifier
							</h3>
							<p className="text-gray-700 mb-6 leading-relaxed">
								Never miss a high-value lead again. Automatically prioritize incoming leads so your sales team knows who to contact first.
							</p>
							<a 
								href="#contact" 
								className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-accent/80 transition-colors duration-200"
							>
								See How It Works
								<svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</a>
						</div>
					</div>

					{/* Service Card 2: API Integration */}
					<div className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
						<div className="p-8">
							<div className="flex items-center justify-center w-16 h-16 bg-brand-secondary/20 rounded-2xl mb-6">
								<svg className="w-8 h-8 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className="text-xl sm:text-2xl font-bold text-brand-primary-dark mb-4 leading-tight">
								Custom API Integration
							</h3>
							<p className="text-gray-700 mb-6 leading-relaxed">
								Make your tools talk to each other. Connect your CRM, email, and apps to create seamless workflows that eliminate manual data entry.
							</p>
							<a 
								href="#contact" 
								className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-accent/80 transition-colors duration-200"
							>
								See How It Works
								<svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</a>
						</div>
					</div>

					{/* Service Card 3: Web Dev & Fixes */}
					<div className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
						<div className="p-8">
							<div className="flex items-center justify-center w-16 h-16 bg-brand-secondary/20 rounded-2xl mb-6">
								<svg className="w-8 h-8 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className="text-xl sm:text-2xl font-bold text-brand-primary-dark mb-4 leading-tight">
								Web Development & Fixes
							</h3>
							<p className="text-gray-700 mb-6 leading-relaxed">
								A website that works as hard as you do. From building fast, modern sites to debugging complex issues—I ensure your online presence drives growth.
							</p>
							<a 
								href="#contact" 
								className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-accent/80 transition-colors duration-200"
							>
								See How It Works
								<svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Contact Details Section */}
				<div className="mt-12 sm:mt-16 lg:mt-20">
					<div className="bg-gradient-to-r from-brand-primary to-brand-primary/90 rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-xl">
						<h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
							Ready to Get Started?
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
									</svg>
									<span className="font-medium">{name}</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
									</svg>
									<span>{city}, {state} {zip}</span>
								</div>
							</div>
							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
									</svg>
									<span>{phone}</span>
								</div>
								<div className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									<span>{email}</span>
								</div>
							</div>
						</div>
						
						{/* CTA Button */}
						<div className="text-center mt-8">
							<a 
								href="#contact" 
								className="bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
							>
								<span>Book a Free Audit</span>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Business;
