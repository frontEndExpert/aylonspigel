import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import App from '@/components/App';

export default function ServicesHe() {
	const [isHebrew, setIsHebrew] = useState(true);

	return (
        <App title="שירותים - First Choice AI" 
            description="First Choice AI - שירותי פיתוח אפליקציות ווב ושיווק דיגיטלי" >
            
            <div className='blog-container'>
                {/* Language Toggle Button */}
                <div className="mb-6 text-center">
                    <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1">
                        <Link 
                            href="/services" 
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                !isHebrew 
                                    ? 'bg-white text-gray-800 shadow-lg' 
                                    : 'text-white hover:bg-white/20'
                            }`}
                            onClick={() => setIsHebrew(false)}
                        >
                            English
                        </Link>
                        <Link 
                            href="/services-he" 
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                isHebrew 
                                    ? 'bg-white text-gray-800 shadow-lg' 
                                    : 'text-white hover:bg-white/20'
                            }`}
                            onClick={() => setIsHebrew(true)}
                        >
                            עברית
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col gap-5 services' dir='rtl'>
                    <h1 className="my-5 text-white text-[36px]" dir='rtl'>שירותי פיתוח ופרסום</h1>
                    <h2 className="text-[24px]">עיצוב וביצוע של דף נחיתה לעסק <br/>לאיסוף כתובות אימייל ואו מספרי טלפון של לקוחות פוטנציאלים</h2>
                    
                    <div className='mb-8 package'>
                        <Image src="/static/images/header-sample.png" alt="חבילת בסיס" width={400} height={240} className="mr-20 float-left" />
                        <h2 className="m-0 text-[20px]">חבילת בסיס כוללת:</h2>
                        <ul className="list-disc mb-9">
                            <li className="text-[20px]">עיצוב וביצוע של דף נחיתה עם עד 5 תמונות לעסק שלך.</li>
                            <li>אתה מספק שם דומיין, כתובת לדף הנחיתה או קונה דומיין.</li>
                            <li>בנוסף עליך להצטייד בחשבון של הוסטינג להתקנת דף הנחיתה.</li>
                            <li>הוסטינג עולה בערך כ$5 לחודש.</li>
                        </ul>
                    </div>
                    
                    <div className='mb-8 package'>
                        <Image src="/static/images/form1.png" alt="חבילה סטנדרטית" width={220} height={220} className="ml-20 float-right" />
                        <h2 className="m-0 text-[20px]">חבילה סטנדרטית הכוללת את חבילת הבסיס ועוד:</h2>
                        <ul className="list-disc mb-9">
                            <li className="text-[20px]">
                                טופס לאסוף שם ואימייל של המבקרים שלך ושומר אותם
                                ב-Google Sheet
                            </li>
                            <li>הקופירייטינג שלי שיוביל את המבקרים לשלוח לך את המידע שלהם.</li>
                            <li>עם חשבון Zapier שעולה כ80 שקל בחודש או חשבון Make שעולה כ40 שקל
                                בחודש
                            </li>
                            <li>אתה יכול לשלוח אימייל אוטומטי לנרשמים.</li>
                            <li>או שאתה יכול פשוט לאסוף מספרי טלפון ולהתקשר אליהם בעצמך.</li>
                        </ul>
                    </div>
                    
                    <div className='package'>
                        <Image src="/static/images/landing3.png" alt="חבילת AI VIP" width={340} height={255} className="mr-10 float-left" />
                        <h2 className="m-0 text-[20px]">חבילת AI VIP הכוללת את חבילת הבסיס והסטנדרטית ובנוסף גם:</h2>
                        <ul className="list-disc mb-9">
                            <li className="m-0 text-[20px]">VideoBot וידאו בוט מונפש שמדבר אל הקהל שלך ומושך את תשומת ליבם.</li>
                            <li>3 שאלות ותשובות כתובות מראש עבור ה-Video Bot (תבסס על הקלט
                                שלך).
                            </li>
                            <li>איסוף שם ודוא&quot;ל דרך ה-VideoBot, בנוסף לשאלון, מכיוון שזה עשוי
                                לאסוף כמות גדולה יותר של כתובות אימייל.
                            </li>
                            <li>הפעלת מנגנון הGPT לתשובות אוטומטיות. אתה יכול להזין את
                                ה-VideoBot עם 3 מסמכים על העסק שלך.
                            </li>
                            <li>הטמעת חיבור ליומן הפגישות שלך ב Calendly. מבקרי האתר יוכלו לקבוע
                                פגישה איתך ללא התערבות אדם.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </App>
    );
}
