import React from 'react';
import Link from 'next/link';


const Nav = () => {
	return (
		<>
			<nav id='nav-wrap'>
			<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
					Show navigation
				</a>
				<a className='mobile-btn' href='#home' title='Hide navigation'>
					Hide navigation
				</a> 
	<ul id='nav' className='nav'>
					<li className='current'>
						<Link className='smoothscroll' href='/#home'>
							Home
						</Link>
					</li>
					<li>
						<Link className='smoothscroll' href='/#about'>
							About
						</Link>
					</li>
					<li>
						<Link className='smoothscroll' href='/#testimonials'>
							Testimonials
						</Link>
					</li>
					<li>
						<Link className='smoothscroll' href='/#contact'>
							Contact
						</Link>
					</li>
					<li className='smoothscroll'>
						<Link href={{ pathname: "/more-clients-today" }} alt="איך להשיג יותר לקוחות לעסק">More-Clients</Link>
					</li>
					<li className='smoothscroll'>
						<Link href={{ pathname: '/blog/robots-future' }}>The Future of Chatbots</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;



{/* */}