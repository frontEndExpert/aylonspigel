import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
//import profilepic from '../assets/profilepic.png';

const Header = ({ data }) => {
	if (data) {
		var profilepic = '/static/images/' + data.image;
		var networks = data.social.map(function (network) {
			return (
				<li key={network.name}>
					<a href={network.url} className="hover:scale-110 transition-transform duration-200">
						<i className={network.className}></i>
					</a>
				</li>
			);
		});
	}

	return (
		<header id='home' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0" style={{
					backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
					backgroundSize: '60px 60px'
				}}></div>
			</div>
			
			<div className='w-full max-w-6xl mx-auto px-6 text-center relative z-10'>
				<div className='flex flex-col items-center justify-center'>
					{/* Profile Image */}
					<div className="relative group mb-[300px]">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
						<Image
							className='rounded-full mx-auto relative ring-4 ring-white/20 shadow-2xl'
							src={profilepic || '/static/images/aylon.png'}
							alt="Aylon's Profile Pic"
							width={140}
							height={140}
						/>
					</div>
					
					{/* Typewriter Section - Directly under profile picture */}
					<div className='w-full flex flex-col items-center justify-center mb-8 -mt-00'>
						<h1 className='text-[32px] md:text-[42px] font-bold mb-6 text-white leading-tight text-center'>
							<span className="block mb-[30px]">Aylon Spigel</span>
							<div className="text-center">
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.typeString("<span class='text-blue-300 text-center' style='font-size: 32px; display: block; text-align: center;'>Stop Wasting Time on Manual Tasks.</span>")
											.pauseFor(1000)
											.deleteAll()
											.typeString("<span class='text-blue-300 text-center' style='font-size: 32px; display: block; text-align: center;'>I Build AI Automations That Do The Work For You.</span>")
											.pauseFor(1000)
											.typeString("<span class='text-blue-300 text-center' style='font-size: 28px; display: block; text-align: center;'><br>Web Developer specializing in custom AI work flows </span>")
											.pauseFor(1000)
											.typeString("<span class='text-red-400 text-center' style='font-size: 24px; display: block; text-align: center;'><br>that save businesses 10+ hours a week on repetitive tasks.</span>")
											.pauseFor(1000)
											.deleteAll()
											.typeString("<span class='text-blue-300 text-center' style='font-size: 32px; display: block; text-align: center;'>Are You Ready to increase your profits with AI?</span>")
											.start();
									}}
								/>
							</div>
						</h1>
						
					</div>
				</div>
			</div>

			{/* Social Links - Positioned at bottom */}
			<div className='absolute bottom-24 left-1/2 transform -translate-x-1/2'>
				<ul className='social flex justify-center items-center space-x-6 text-2xl text-white/80'>{networks}</ul>
			</div>

			{/* Scroll Down Indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
				<a className='smoothscroll text-white/60 hover:text-white transition-colors duration-300' href='#about'>
					<div className="animate-bounce">
						<i className='icon-up-circle text-3xl'></i>
					</div>
				</a>
			</div>
		</header>
	);
};

export default Header;
