import React from 'react';
import Image from 'next/image';

const Business = ({ data }) => {
	// Extract data with fallbacks
	
	return (
		<section id='services' className="py-8 sm:py-12 lg:py-16 bg-brand-neutral w-full">
			<div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
				{/* Section Header */}
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary-dark mb-4 sm:mb-6 leading-tight">
						{data?.title}
					</h2>
					<p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
						{data?.subtitle}
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
								{data?.card1?.title}
							</h3>
							<p className="text-gray-700 mb-6 leading-relaxed">
								{data?.card1?.subtitle}
							</p>
							<a 
								href="#contact" 
								className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-accent/80 transition-colors duration-200"
							>
								{data?.call2action}
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
								{data?.card2?.title}
							</h3>
							<p className="text-gray-700 mb-6 leading-relaxed">
								{data?.card2?.subtitle}
							</p>
							<a 
								href="#contact" 
								className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-accent/80 transition-colors duration-200"
							>
								{data?.call2action}
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
								{data?.card3?.title}
							</h3>
							<p className="text-gray-700 mb-6 leading-relaxed">
								{data?.card3?.subtitle}

							</p>
							<a 
								href="#contact" 
								className="inline-flex items-center text-brand-accent font-semibold hover:text-brand-accent/80 transition-colors duration-200"
							>
								{data?.call2action }
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
							 {data?.call2action2 }
						</h3>
						
						
						{/* CTA Button */}
						<div className="text-center mt-8">
							<a 
								href="#contact" 
								className="bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
							>
								<span>{data?.call2action2}</span>
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
