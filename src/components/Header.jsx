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
					<a href={network.url}>
						<i className={network.className}></i>
					</a>
				</li>
			);
		});
	}

	return (
		<header id='home'>
			<div className='row banner'>
				<div >
					<Image
						className='rounded-full mx-auto mb-4'
						src={profilepic}
						alt="Aylon's Profile Pic"
						width={120}
						height={120}
					/>
				</div>
				<div className='banner-text'>
					<h1 style={{ fontSize: '48px' }}>
						Aylon Spigel
						<Typewriter
							onInit={(typewriter) => {
								typewriter

									.typeString(`My name is Aylon Spigel.`)

									.pauseFor(1000)
									.deleteAll()
									.typeString("I'm A Fullstack Developer")
									.start();
							}}
						/>
					</h1>
					<h3>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.pauseFor(2000)
									.typeString(`Based in Israel.`)

									.pauseFor(1000)
									.deleteAll()
									.typeString('Building the Internet Since 1996.')
									.start();
							}}
						/>
					</h3>
					<hr />
					<ul className='social'>{networks}</ul>
				</div>
			</div>

			<p className='scrolldown'>
				<a className='smoothscroll' href='#about'>
					<i className='icon-down-circle'></i>
				</a>
			</p>
		</header>
	);
};

export default Header;
