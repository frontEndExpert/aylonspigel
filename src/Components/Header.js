import React from 'react';
import * as classes from './style.css';
import Typewriter from 'typewriter-effect';

const Header = ({ data }) => {
	if (data) {
		var name = data.name;
		var occupation = data.occupation;
		var description = data.description;
		var city = data.address.city;
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
	//<TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
	return (
		<header id='home'>
			<nav id='nav-wrap'>
				<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
					Show navigation
				</a>
				<a className='mobile-btn' href='#home' title='Hide navigation'>
					Hide navigation
				</a>

				<ul id='nav' className='nav'>
					<li className='current'>
						<a className='smoothscroll' href='#home'>
							Home
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#about'>
							About
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#resume'>
							Resume
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#portfolio'>
							Works
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#testimonials'>
							Testimonials
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#contact'>
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<div className='row banner'>
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
