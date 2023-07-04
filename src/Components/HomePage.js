import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';

const HomePage = () => {
	const [resumeData, setResumeData] = useState({});

	useEffect(() => {
		fetch('/resumeData.json')
			.then((res) => res.json())
			.then((data) => {
				setResumeData(data);
			});
	}, []);

	return (
		<div className='home-page'>
			<Header data={resumeData.main} />
			<About data={resumeData.main} />
			<Resume data={resumeData.resume} />
			<Portfolio data={resumeData.portfolio} />
			<Testimonials data={resumeData.testimonials} />
			<Contact data={resumeData.main} />
			<Footer data={resumeData.main} />
		</div>
	);
};

export default HomePage;
