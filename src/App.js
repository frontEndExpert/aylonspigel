import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import FirstChoice from './Components/FirstChoice';
import RobotsFuture from './Components/RobotsFuture';

// let router = createBrowserRouter([
// 	{
// 		path: '/',
// 		//loader: () => ({ message: 'Hello Data Router!' }),
// 		Component() {
// 			//let data = useLoaderData();
// 			return <HomePage />;
// 		},
// 	},
// 	{
// 		path: '/first-choice-ai',
// 		Component() {
// 			return <FirstChoice />;
// 		},
// 	},
// 	{
// 		path: '/first-choice-ai/robots-future',
// 		Component() {
// 			return <RobotsFuture />;
// 		},
// 	},
// ]);

const App = () => {
	//return
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/first-choice-ai' element={<FirstChoice />} />
					<Route path='/blog/robots-future' element={<RobotsFuture />} />
					{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					<Route path='*' element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;

function Layout() {
	return (
		<div>
			{/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
			<nav id='nav-wrap'>
				<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
					Show navigation
				</a>
				<a className='mobile-btn' href='#home' title='Hide navigation'>
					Hide navigation
				</a>

				<ul id='nav' className='nav'>
					<li className='current'>
						<a className='smoothscroll' href='/#home'>
							Home
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='/#about'>
							About
						</a>
					</li>
					<li className='smoothscroll'>
						<a className='smoothscroll' href='/#resume'>
							Resume
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='/#portfolio'>
							Works
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='/#testimonials'>
							Testimonials
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='/#contact'>
							Contact
						</a>
					</li>
					<li className='smoothscroll'>
						<Link to='/first-choice-ai'>First Choice AI</Link>
					</li>
					<li className='smoothscroll'>
						<Link to='/blog/robots-future'>The Future of Chatbots</Link>
					</li>
				</ul>
			</nav>

			<hr />

			{/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
			<Outlet />
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to='/'>Go to the home page</Link>
			</p>
		</div>
	);
}
