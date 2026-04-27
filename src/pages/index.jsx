import React from 'react';
import dynamic from 'next/dynamic';
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

const Nav = dynamic(() => import('@/components/Nav'), { ssr: true });

export default function HomeHe() {
	return (
		<App title="אוטומציית AI לניהול לידים | חסכו 10+ שעות בשבוע | אילון שפיגל | AI Automation & AI Agent Implementation for Small Businesses" description="מעוניינים לחסוך 10+ שעות בשבוע? אני בונה מערכות אוטומציה עם בינה מלאכותית שממיינת ומדרגת לידים אוטומטית. התאימו את מערכת ניהול הלידים לעסק שלכם - קבלו בדיקת אוטומציה חינם!">
			<div className="App">
				<Nav />
				<Header data={ resumeDataHe.main } />
				<Business data={ resumeDataHe.business } />
				<Portfolio data={ resumeDataHe.portfolio } />
				<Testimonials data={ resumeDataHe.testimonials } />
				<Contact data={ resumeDataHe } />
				<Footer data={ resumeDataHe.main } />
			</div>
		</App>
	);
}
