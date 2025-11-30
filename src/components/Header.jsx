import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({ data }) => {
	const router = useRouter();
	const isHebrew = !(router.pathname?.includes('-en') || router.pathname === '/index-en');

	if (data) {
		var profilepic = '/static/images/' + data.image;
		var networks = data.social.map(function (network) {
			return (
				<li key={ network.name }>
					<a href={ network.url } className="hover:scale-110 transition-transform duration-200">
						<i className={ network.className }></i>
					</a>
				</li>
			);
		});
	}

	return (
		<header id='home' className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-800 flex items-center justify-center pt-16 relative">
			{/* Background Pattern */ }
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0" style={ {
					backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
					backgroundSize: '60px 60px'
				} }></div>
			</div>

			{/* Main Content Container */ }
			<div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center">

				{/* Language Toggle Button */ }
				<div className="mb-6">
					<div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1">
						<Link
							href="/index-en"
							className={ `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!isHebrew
									? 'bg-white text-gray-800 shadow-lg'
									: 'text-white hover:bg-white/20'
								}` }
						>
							English
						</Link>
						<Link
							href="/"
							className={ `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isHebrew
									? 'bg-white text-gray-800 shadow-lg'
									: 'text-white hover:bg-white/20'
								}` }
						>
							עברית
						</Link>
					</div>
				</div>

				<div className="mb-6">
					{/* Profile Image */ }
					<div className="flex justify-center mb-4">
						<Image
							className="rounded-full relative border-4 border-white/20 shadow-2xl"
							src={ profilepic || '/static/images/aylon.png' }
							alt="Aylon's Profile Pic"
							width={ 120 }
							height={ 120 }
						/>
					</div>
					{/* Name */ }
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-secondary leading-tight">
						{ data?.name || "Aylon Spigel" }
					</h1>
					{/* Headline */ }		<br />
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
						{ data?.headline || "Automate Your Workflow, Amplify Your Growth" }
					</h2>
					<br />
					{/* Description */ }
					<div className="mb-6">
						<p className="text-xl sm:text-xl text-gray-300 font-bold max-w-3xl mx-auto ">
							{ data?.description || "I help businesses save 10+ hours a week by building custom AI automations that handle lead qualification, data sync, and repetitive tasks—so you can focus on what matters." }
						</p>
					</div>
				</div>



				{/* CTA Button */ }
				<div className="mb-8">
					<a
						href="#contact"
						className="bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
					>
						<span>{ data?.call2action2 || "Book a Free Audit" }</span>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</a>
				</div>

				{/* Social Links */ }
				<div className="mb-8">
					<ul className="flex justify-center items-center gap-6 text-2xl text-white/80">
						{ networks }
					</ul>
				</div>
			</div>

			{/* Scroll Down Indicator */ }
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<a className="text-white/60 hover:text-white transition-colors duration-300" href='#about'>
					<div className="animate-bounce">
						<i className='icon-up-circle text-3xl'></i>
					</div>
				</a>
			</div>
		</header>
	);
};

export default Header;