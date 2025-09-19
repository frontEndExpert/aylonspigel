import React from 'react';
import App from '@/components/App';
import Header from '@/components/Header';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Business from '@/components/business';
import resumeDataHe from '../../public/static/resumeDataHe.json';

export default function HomeHe() {
	return (
		<App title="אילון שפיגל - אוטומציות AI" description="אילון שפיגל -  בונה אתרים ואוטומציות עם ניסיון של 25+ שנים ">
			<div className="App">
				<Header data={resumeDataHe.main} />
				<Business data={resumeDataHe.business} />
				<Portfolio data={resumeDataHe.portfolio} />
				<Testimonials data={resumeDataHe.testimonials} />
				<Contact data={resumeDataHe} />
				<Footer data={resumeDataHe.main} />
			</div>
		</App>
	);
}
