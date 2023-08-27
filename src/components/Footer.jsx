import React from 'react';
import Link from 'next/link';

const Footer = ({ data }) => {
	if (data) {
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
		<footer>
			<div className='row'>
				<div className='twelve columns'>
					<ul className='social-links'>{networks}</ul>
					<Link className='text-white copyright' href='/privacy' >Privacy Policy</Link>
					<ul className='copyright'>
						<li>
							Made by{' '}
							<a title='frontend expert' href='http://www.aylonspigel.com/'>
								Aylon Spigel
							</a>
						</li>
					</ul>
				</div>
				<div id='go-top'>
					<a className='smoothscroll' title='Back to Top' href='#home'>
						<i className='icon-up-open'></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
