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
					<h1 className='text-[42px]' style={{ fontSize: '42px' }}>
						Aylon Spigel
						<Typewriter
							onInit={(typewriter) => {
								typewriter

									.typeString("<span style={{ fontSize: '48px' }}>My name is Aylon Spigel.</span>")

									.pauseFor(1000)
									.deleteAll()
									.typeString("<span style={{ fontSize: '48px' }}>I am A Web Application Developer</span>")
									.pauseFor(1000)
									.typeString("<span style={{ fontSize: '42px' }}><br>and an Automation Expert \(Zapier or Make\).</span>")
									.pauseFor(1000)
									.typeString("<span class='text-red-500' style={{ color: 'red'; 'font-size': '36px' }}><br>Ready to increase your profits with an army of AI Agent Robots.</span>")
									.start();
							}}
						/>
					</h1>
					<h3>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.pauseFor(8000)
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
