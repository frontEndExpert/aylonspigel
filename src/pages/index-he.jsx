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
		<App title="אוטומציית AI לניהול לידים | חסכו 10+ שעות בשבוע | אילון שפיגל" description="מעוניינים לחסוך 10+ שעות בשבוע? אני בונה מערכות אוטומציה עם בינה מלאכותית שממיינת ומדרגת לידים אוטומטית. התאימו את מערכת ניהול הלידים לעסק שלכם - קבלו בדיקת אוטומציה חינם!">
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
