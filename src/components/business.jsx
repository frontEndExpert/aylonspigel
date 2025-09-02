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
						How I Help Businesses
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
						<section className="services-section py-16 bg-gray-50">
    <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How I Help Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I provide specialized solutions to automate workflows, integrate your tools, and solve complex web
                development challenges, saving you time and money.
            </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1: AI Lead Qualifier */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="icon-container mb-6 text-blue-600">
                    {/* Replace with your preferred icon from Lucide, Heroicons, etc. */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Lead Qualifier</h3>
                <p className="text-gray-600 mb-6">
                    Turn website leads into sorted, prioritized sales opportunities automatically. Never miss a high-value lead again.
                </p>
                <a href="#contact" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>

            {/* Service Card 2: API Integration */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="icon-container mb-6 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom API Integration</h3>
                <p className="text-gray-600 mb-6">
                    Connect your tools (like Google Sheets, CRM, Slack) to work together seamlessly, creating a unified and efficient workflow.
                </p>
                <a href="#contact" className="text-green-600 font-medium hover:text-green-800 inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>

            {/* Service Card 3: Web Dev & Fixes */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="icon-container mb-6 text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development & Fixes</h3>
                <p className="text-gray-600 mb-6">
                    From building new pages to debugging complex issues on your existing site. Ensure your web presence is robust and effective.
                </p>
                <a href="#contact" className="text-purple-600 font-medium hover:text-purple-800 inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
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
