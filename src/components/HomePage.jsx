import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), { ssr: true });
const About = dynamic(() => import('./About'), { ssr: true });
const Footer = dynamic(() => import('./Footer'), { ssr: true });
const Testimonials = dynamic(() => import('./Testimonials'), {	ssr: true  });
const Portfolio = dynamic(() => import('./Portfolio'), {	ssr: true  });
const Contact = dynamic(() => import('./Contact'), {	ssr: true  });
const Resume = dynamic(() => import('./Resume'), {	ssr: true  });


const HomePage = () => {
	const [resumeData, setResumeData] = useState({});

	useEffect(() => {
		fetch('/static/resumeData.json')
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

