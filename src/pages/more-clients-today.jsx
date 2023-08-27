import React from "react";
import Link from "next/link";
import App from '@/components/App';

export default function MoreClientsToday() {
	return (
        <App title="More Clients Today"
            description="More Clients Today - Digital Marketing and Web Application Development. 
            אילון שפיגל - שיווק דיגיטלי ופיתוח באינטרנט" >
            
            <div className='blog-container' direction="rtl">
                <h1 className='font-bold  text-center text-[32px]'>more-clients-today.com</h1>
                <h1 className='font-bold  text-center text-[32px]'>אילון שפיגל - שיווק דיגיטלי ופיתוח באינטרנט</h1>
                <p className="text-right">
                   :עכשיו בישראל - שיווק דיגיטלי ופיתוח באינטרנט<br/>
                    אילון מביא איתו 25 שנות נסיון, בפיתוח אפליקציות ואתרים<br/>
                     בנוסף להכשרות רבות בפרסום בעברית ובאנגלית ממיטב המרצים בעולם<br/>
                      ,כולל הסמכה בְנוֹירוֹ לִינְגוִיסְטִיק פְרוֹגְרָמִינְג<br/>
                      שהיא הבסיס לעקרונות הקופיריטינג<br/>
                      &quot;הכל למען הלקוחות שלי&quot;.
                </p>
    
                <p className="text-right">
                    למידע נוסף והרשמה ליעוץ חינמי לחצו על הכפתור.
                </p>
    
                <p className="text-center">
                    <a className='bg-green-500 rounded-2xl p-3 link hover:bg-green-300' href='https://more-clients-today.com'>
                        לחץ כאן ליעוץ חינם
                    </a>
                </p>
            </div>
        </App>
        );
    }
