/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
// Importing CSS Module
import styles from '../styles/aioffer.module.css';

export default function LandingPage() {
  const WA_LINK = 'https://wa.me/972559490215';

  const bullets = [
    {
      icon: '✅',
      title: 'דף נחיתה שממיר',
      desc: 'דף נחיתה מקצועי שממיר גולשים ללידים — מעוצב, מהיר, ומותאם למובייל.',
    },
    {
      icon: '✅',
      title: 'קמפיין פרסום מושק',
      desc: 'קמפיין בפייסבוק / אינסטגרם כולל הקמה, קריאייטיב, וניהול השקה.',
    },
    {
      icon: '✅',
      title: 'אוטומציה בוואטסאפ',
      desc: 'מענה אוטומטי מיידי לכל ליד — אף לקוח פוטנציאלי לא הולך לאיבוד.',
    },
    {
      icon: '✅',
      title: 'דוח ביצועים שבועי',
      desc: 'תוצאות שקופות: כמה לידים, כמה עלתה כל פנייה, מה עובד.',
    },
    {
      icon: '✅',
      title: 'הכל מוכן תוך 5–7 ימי עסקים',
      desc: 'אנחנו מטפלים בהכל — אתה רק עונה לטלפון ומקבל לקוחות.',
    },
  ];

  return (
    <>
      <Head>
        <title>קבל 10–30 לידים תוך 14 יום | First Choice AI</title>
        <meta name="description" content="מערכת לידים שלמה: דף נחיתה, פרסומות ואוטומציה בוואטסאפ. ערבות תוצאות." />
      </Head>

      <div
        dir="rtl"
        className={ `${styles.pageWrapper} min-h-screen text-white bg-[#0d0d0d]` }
      >

        {/* ─── NAV ─── */ }
        <nav
          className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0d0d0d]/85 backdrop-blur-xl border-b border-purple-600/20"
        >
          <div className="flex items-center gap-1">
            <span
              className="text-2xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            >AI</span>
            <span className="text-2xl font-black text-white">First Choice</span>

          </div>

          <a
            href={ WA_LINK }
            target="_blank"
            rel="noopener noreferrer"
            className={ `${styles.btnWa} hidden sm:inline-flex items-center gap-2 font-bold text-sm text-white rounded-full px-5 py-2.5 transition-transform hover:scale-105 bg-[#25D366]` }
          >
            <span>📲</span>
            <span>וואטסאפ</span>
          </a>
        </nav>

        {/* ─── HERO ─── */ }
        <section className={ `relative overflow-hidden pt-36 pb-28 px-6 text-center ${styles.heroGradient}` }>
          <div
            className={ `${styles.heroBlob} absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none bg-purple-600/35 blur-[60px]` }
            style={ {
              background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)',
            } }
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-600/15 border border-purple-400/35 text-purple-200"
            >
              🔥 מוגבל ל-3 לקוחות ראשונים
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white text-right sm:text-center">
              קבל{ ' ' }
              <span className={ styles.gradientText }>10–30 לידים מוכנים</span>
              { ' ' }תוך 14 יום —{ ' ' }
              <br className="hidden sm:block" />
              <span className="text-yellow-400">או שלא תשלם כלום</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-10 mx-auto max-w-2xl text-gray-300 text-right 
            sm:text-center">"היי, אני איילון — אני משלב פרסום ממומן עם <strong className="text-white">אוטומציה ובינה מלאכותית</strong> כדי להביא לעסקים בישראל יותר לידים, מהר יותר. <br />העסקים שמאמצים בינה מלאכותית היום — ינצחו את המתחרים שלהם מחר. אלה שלא — יישארו מאחור"</p>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 mx-auto max-w-2xl text-gray-300 text-right sm:text-center"
            >
              אנחנו בונים בשבילך את כל מערכת יצירת הלידים: דף נחיתה, קמפיינים ממומנים וסוכני AI.

              הכול מונע על‑ידי ה‑AI המתקדם ביותר – כך שהלידים שלך חכמים יותר, מהירים יותר וזולים יותר מאשר הרצת פרסום ממומן בלבד.

              אנחנו עושים את כל העבודה הקשה

              { ' ' }
              <strong className="text-white">אתה רק עונה לטלפון.</strong>
            </p>

            <a
              href={ WA_LINK }
              target="_blank"
              rel="noopener noreferrer"
              className={ `${styles.btnWa} ${styles.float} inline-flex items-center justify-center gap-3 rounded-full font-black text-xl text-white px-10 py-5 transition-transform hover:scale-105 bg-[#25D366] shadow-[0_8px_30_rgba(37,211,102,0.45)]` }
            >
              📲 דברו איתנו בוואטסאפ
            </a>

            <p className="mt-5 text-sm text-gray-400">
              ✓ ללא עלות התחלתית &nbsp;·&nbsp; ✓ ללא קנסות ביטול &nbsp;·&nbsp; ✓ תוצאות מובטחות
            </p>
          </div>
        </section>

        {/* ─── WHAT YOU GET ─── */ }
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-purple-400">
                מה כלול בחבילה
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                הכל מוכן עבורך —{ ' ' }
                <span className={ styles.gradientText }>פתרון מקצה לקצה</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              { bullets.map((b, i) => (
                <div
                  key={ i }
                  className={ `${styles.cardHover} rounded-2xl p-6 text-right bg-[#111827] border border-purple-600/25` }
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-purple-600/15 border border-purple-400/30 shadow-[0_0_16px_rgba(124,58,237,0.2)]"
                  >
                    { b.icon }
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{ b.title }</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{ b.desc }</p>
                </div>
              )) }

              {/* 6th guarantee card */ }
              <div
                className={ `${styles.cardHover} rounded-2xl p-6 text-right sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-600/20 to-purple-600/10 border border-purple-400/40` }
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-purple-600/25 border border-purple-400/50"
                >
                  🛡️
                </div>
                <h3 className="text-lg font-bold text-white mb-2">ערבות תוצאות</h3>
                <p className="text-sm leading-relaxed text-purple-200">
                  לא הגעת ל-10 לידים תוך 14 יום? לא תשלם. פשוט וברור.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIAL ─── */ }
        {/* 
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-8 text-purple-400">
              מה אומרים הלקוחות שלנו
            </p>

            <div
              className="relative rounded-3xl p-10 text-right bg-[#111827] border border-purple-600/30 shadow-[0_0_60px_rgba(124,58,237,0.15)]"
            >
              <div
                className="absolute top-6 right-8 text-8xl font-serif leading-none select-none text-purple-600/20"
              >
                &ldquo;
              </div>

              <div className="flex justify-center gap-1 mb-6 text-2xl">
                { [...Array(5)].map((_, i) => (
                  <span key={ i } className="text-yellow-500">★</span>
                )) }
              </div>

              <blockquote
                className="text-xl sm:text-2xl font-semibold leading-relaxed mb-8 text-white text-right"
              >
                &ldquo;תוך שבועיים התחלתי לקבל 3–5 לידים ביום מפייסבוק.
                ההשקעה הכי טובה שעשיתי לעסק שלי.&rdquo;
              </blockquote>

              <div className="flex items-center justify-end gap-3">
                <div>
                  <p className="font-bold text-white">דוד כהן</p>
                  <p className="text-sm text-gray-500">
                    בעל עסק שירותי בית, ת&quot;א
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl bg-gradient-to-br from-purple-600 to-purple-500"
                >
                  ד
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* ─── PRICING ─── */ }
        <section className="py-24 px-6">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-purple-400">
              מחיר השקה מיוחד
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-10">
              השקעה שמחזירה את עצמה
            </h2>

            <div
              className="rounded-3xl p-10 relative overflow-hidden bg-[#111827] border border-purple-600/40 shadow-[0_0_80px_rgba(124,58,237,0.2)]"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none blur-[30px]"
                style={ {
                  background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)',
                } }
              />

              <div className="relative z-10">
                <div
                  className={ `${styles.scarcityPulse} inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-6 bg-red-500/15 border border-red-500/40 text-red-400` }
                >
                  🔴 נשארו <strong>2 מקומות בלבד!</strong>
                </div>

                <p className="text-2xl line-through mb-1 text-gray-500">
                  ₪4,000
                </p>

                <div className="flex items-end justify-center gap-2 mb-2">
                  <span
                    className="text-6xl sm:text-7xl font-black bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent"
                  >
                    ₪2,500
                  </span>
                </div>
                <p className="text-sm mb-8 text-gray-400">
                  מחיר מיוחד ל-3 לקוחות ראשונים בלבד
                </p>

                <div className="w-full h-px mb-8 bg-purple-600/25" />

                <ul className="text-right space-y-3 mb-8">
                  { [
                    'דף נחיתה + קמפיין + אוטומציה',
                    'ערבות 14 יום — לא תשלם אם לא הגעת לתוצאות',
                    'הכל כולל, אין עלויות נסתרות',
                  ].map((item, i) => (
                    <li
                      key={ i }
                      className="flex items-center justify-start gap-3 text-sm text-gray-300"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 bg-purple-600/25 text-purple-400"
                      >
                        ✓
                      </span>
                      <span>{ item }</span>

                    </li>
                  )) }
                </ul>

                <a
                  href={ WA_LINK }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ `${styles.btnWa} w-full flex items-center justify-center gap-3 rounded-full font-black text-lg text-white py-5 transition-transform hover:scale-105 bg-[#25D366] shadow-[0_8px_30_rgba(37,211,102,0.4)]` }
                >
                  📲 דברו איתנו בוואטסאפ
                </a>

                <p className="mt-4 text-xs text-gray-500">
                  שיחה קצרה של 10 דקות — ללא התחייבות
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */ }
        <footer
          className="py-8 text-center text-sm border-t border-purple-600/20 text-gray-600"
        >
          כל הזכויות שמורות © 2025{ ' ' }
          <span className="font-bold text-purple-600">First Choice AI</span>{ ' | ' }
          <a href="https://aylonspigel.com/privacy-he/" target="_blank" rel="noopener noreferrer">מדיניות פרטיות</a>
        </footer>

      </div>
    </>
  );
}
