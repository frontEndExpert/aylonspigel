import React from 'react';
import dynamic from 'next/dynamic';
import App from '@/components/App';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Business from '@/components/business';
import resumeData from '../../public/static/resumeData.json';

const Nav = dynamic(() => import('@/components/Nav'), { ssr: true });

export default function Index() {
	return (
		<App title="AI Lead Qualification for Israeli Startups and beyond | Aylon Spigel"
			description="Drowning in leads but missing the best ones? I build AI automations that qualify & prioritize your inbound leads instantly. Save 10+ hours/week. Get a free automation audit.">
			<div className="App">
				<Nav />
				<Header data={resumeData.main} />
				<Business data={resumeData.business} />
				<Portfolio data={resumeData.portfolio} />
				<Testimonials data={resumeData.testimonials} />
				<Contact data={resumeData} />
				<Footer data={resumeData.main} />
			</div>
		</App>
	);
}
