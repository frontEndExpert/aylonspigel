/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import styles from '../styles/ai-lead-qualification.module.scss';

const LeadsAI2 = () => {
  return (
    <div className={styles.pageWrapper} dir="rtl">
      <Head>
        <title>מערכת AI לסיווג לידים ב-7 ימים | First Choice AI</title>
        <meta name="description" content="בניית מערכות AI בהתאמה אישית שמסווגות אוטומטית כל ליד נכנס." />
      </Head>

      {/* NAV */}
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <a href="#" className={styles.logo}>First Choice <span>AI</span></a>
          <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnNav}`}>קבע שיחה בחינם ←</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.container}>
          <div className={styles.eyebrow}>לסוכנויות שיווק, יועצים וצוותי שירות B2B בישראל</div>
          <h1 className="text-white">כל שעה שאתה מקדיש<br /><span className={styles.gradientText}>למיון לידים</span><br />היא שעה שאתה לא מוכר בה</h1>
          <p className={styles.heroSub}>
            אתה מנהל עסק לשירותי B2B. לידים נכנסים — מהאתר שלך, מלינקדאין, מהפניות — ואיפשהו בין "זה נראה מעניין" ל"בוא נדבר", רובם נעלמים.
          </p>
          <div className={styles.heroValue}>
             First Choice AI בונה עבורך מערכת AI מותאמת אישית שמסווגת כל ליד נכנס באופן אוטומטי — מדרגת אותם לפי פרופיל הלקוח האידיאלי שלך, מעשירה את הפרטים שלהם, ואומרת לך בדיוק למי להתקשר, מה להגיד ועל מי לדלג. <strong>באוויר תוך 7 ימים.</strong>
          </div>
          <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge} ${styles.btnGlow}`}>
            ← קבע שיחת אפיון חינם למשך 20 דקות
          </a>
          <div className={styles.heroBadges}>
            <span>הקמה החל מ-₪500</span>
            <span className={styles.sep}>·</span>
            <span>באוויר תוך 7 ימים</span>
            <span className={styles.sep}>·</span>
            <span>אין צורך במפתחים</span>
            <span className={styles.sep}>·</span>
            <span>מתחבר לכלים הקיימים שלך</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>הבעיה</div>
          <h2>לא חסרים לך לידים.<br /><span className={styles.gradientText}>חסרים לך הלידים הנכונים.</span></h2>
          <p className={styles.sectionIntro}>כך נראה השבוע שרוב מייסדי ה-B2B מתארים לנו:</p>
          <div className={styles.weekGrid}>
            <div className={styles.weekCard}>
              <div className={styles.weekDay}>יום שני</div>
              <p>שלושה לידים חדשים מטופס יצירת קשר. מעביר 45 דקות בחיפוש בלינקדאין, בדיקת האתרים שלהם, בניסיון להבין אם הם בכלל מתאימים לעבוד איתך.</p>
            </div>
            <div className={styles.weekCard}>
              <div className={styles.weekDay}>יום שלישי</div>
              <p>עונה לשניים מהם. אחד מסנן. אחד אומר "רק בודק אופציות."</p>
            </div>
            <div className={styles.weekCard}>
              <div className={styles.weekDay}>יום חמישי</div>
              <p>מגיעה הפניה. נראית מבטיחה. אתה בשיחות רצופות כל היום.</p>
            </div>
            <div className={styles.weekCard}>
              <div className={styles.weekDay}>יום שישי</div>
              <p>סוף סוף אתה חוזר להפניה. הם אומרים שכבר סגרו עם מישהו אחר.</p>
            </div>
            <div className={`${styles.weekCard} ${styles.weekCardFull}`}>
              <div className={styles.weekDay}>סוף שבוע</div>
              <p>אתה תוהה למה רשימת הלידים שלך מלאה, אבל היומן פגישות שלך לא.</p>
            </div>
          </div>
          <div className={styles.problemCallout}>
            <p>הבעיה היא לא כמות הלידים. הבעיה היא שכל ליד נראה אותו דבר כשהוא מגיע — ואתה שורף שעות על מחקר ידני רק כדי להבין מי שווה חמש דקות מהזמן שלך.</p>
            <p className={styles.problemBold}>ובזמן שאתה עסוק במחקר, הלקוחות הפוטנציאליים הטובים ביותר שלך מדברים עם מישהו שענה להם מהר יותר.</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>הפתרון</div>
          <h2>מה אם כל ליד היה מגיע<br /><span className={styles.gradientText}>כשהוא כבר מסווג?</span></h2>
          <p className={styles.sectionIntro}>זה בדיוק מה שהמערכת החדשה שלך עושה.</p>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>🔍</div>
              <div className={styles.stepNum}>שלב 1</div>
              <h3>העשרה</h3>
              <p>המערכת מחפשת עליהם הכל: שם חברה, אתר, תעשייה, גודל צוות, פרופיל לינקדאין, תפקיד. מחקר שלוקח 20 דקות בצורה ידנית, קורה כעת ב-20 שניות.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>⚖️</div>
              <div className={styles.stepNum}>שלב 2</div>
              <h3>דירוג</h3>
              <p>המערכת משווה את הליד לפרופיל הלקוח האידיאלי שלך ונותנת לו תגית ברורה:</p>
              <div className={styles.scoreTags}>
                <span className={`${styles.tag} ${styles.hot}`}>🔴 לוהט</span>
                <span className={`${styles.tag} ${styles.warm}`}>🟡 חם</span>
                <span className={`${styles.tag} ${styles.nurture}`}>🔵 לטיפוח</span>
                <span className={`${styles.tag} ${styles.dis}`}>⚫ נפסל</span>
              </div>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>📲</div>
              <div className={styles.stepNum}>שלב 3</div>
              <h3>התראה</h3>
              <p>על כל ליד לוהט, תקבל התראה מיידית עם תקציר:</p>
              <div className={styles.alertPreview}>
                <span className={styles.alertDot}></span>
                <p>"זוהי סוכנות שיווק דיגיטלי של 12 עובדים בתל אביב... הנה מה שהייתי אומר להם כדי לפתוח בשיחת מכירה…"</p>
              </div>
              <p className={styles.stepFooter}>טיוטת ההודעה מנוסחת ומוכנה. אתה רק לוחץ שלח.</p>
            </div>
          </div>
          <div className={styles.solutionResult}>
            <strong>התוצאה:</strong> אתה לא משקיע זמן בשיחות עם לידים שלא מוכנים, ואף פעם לא מפספס את העסקאות הטובות.
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>מה אתה מקבל</div>
          <h2>מערכת שנבנתה לאיך שהעסק שלך<br /><span className={styles.gradientText}>באמת עובד</span></h2>
          <div className={styles.deliverablesGrid}>
            <div className={styles.deliverableCard}>
              <div className={styles.delCheck}>✅</div>
              <div>
                <h4>תהליך סיווג AI מותאם אישית</h4>
                <p>נבנה במיוחד לפרופיל הלקוח שלך. חוקי הדירוג משקפים את מה שאתה באמת חושב על לקוחות מצוינים עבור העסק שלך.</p>
              </div>
            </div>
            <div className={styles.deliverableCard}>
              <div className={styles.delCheck}>✅</div>
              <div>
                <h4>סדנת אפיון לקוח (יום 1)</h4>
                <p>פגישה ממוקדת של 45 דקות בה נגדיר במדויק מי הלקוחות הטובים ביותר שלך.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>תמחור</div>
          <h2>תמחור פשוט.<br /><span className={styles.gradientText}>ללא התחייבויות חודשיות.</span></h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingIcon}>🔧</div>
              <h3>הקמה חד-פעמית</h3>
              <div className={styles.pricingAmount}>₪500 – ₪5,000</div>
              <ul className={styles.pricingIncludes}>
                <li>סדנת אפיון לקוח</li>
                <li>בניית מערכת מלאה</li>
                <li>חיבור למערכות קיימות</li>
              </ul>
              <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>קבע שיחה בחינם ←</a>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>זמנים</div>
          <h2>מאפס לאוויר<br /><span className={styles.gradientText}>בשבוע אחד.</span></h2>
          <div className={styles.timelineWrap}>
            <div className={styles.timelineItem}>
              <div className={styles.tlBadge}>📅 ימים 1-2</div>
              <div className={styles.tlBody}>
                <h3>תגלית וסדנת אפיון לקוח</h3>
                <p>ניפגש ל-45 דקות. תספר לי על הלקוחות הכי טובים שלך, על הלידים הכי פחות מתאימים ועל איך התהליך הנוכחי שלך נראה. אמפה הכל למודל דירוג ואתחיל בבנייה.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.tlBadge}>📅 ימים 3-5</div>
              <div className={styles.tlBody}>
                <h3>בניה וחיבורים</h3>
                <p>אני אבנה את כל תהליך הסיווג ואחבר אותו לכלים שאתה משתמש בהם. אתה לא צריך לעשות כלום - אני מטפל בכל ההקמה.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.tlBadge}>📅 ימים 6-7</div>
              <div className={styles.tlBody}>
                <h3>בדיקות, כוונונים והדרכה</h3>
                <p>נריץ את הלידים האמיתיים האחרונים שלך במערכת ונבדוק את התוצאות ביחד. אני אכוונן את הדירוג לפי הפידבק שלך, ואמסור לך מערכת פעילה שעובדת.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>תוצאות מלקוחות</div>
          <h2>תוצאות אמיתיות ממייסדי עסקי B2B<br /><span className={styles.gradientText}>שהיו בדיוק במצב שלך</span></h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteMark}>"</div>
              <p>לפני זה, הייתי מבלה את ימי ראשון בערב במעבר על הלידים של השבוע... עכשיו אני מקבלת הודעת סלאק ברגע שמגיע משהו טוב. קיבלתי בחזרה לפחות 4 שעות עבודה בשבוע.</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>NR</div>
                <div>
                  <strong>נועה ר.</strong>
                  <span>מייסדת, סוכנות דיגיטל · תל אביב</span>
                </div>
              </div>
            </div>
            <div className={`${styles.testimonialCard} ${styles.testimonialFeatured}`}>
              <div className={styles.quoteMark}>"</div>
              <p>במהלך השבועיים הראשונים הגיע ליד בדירוג ״לוהט״ שאולי סביר שהייתי מפספס... פניתי בזמן וזה הפך לפרויקט של 38,000 ש״ח. המערכת החזירה את ההשקעה שלה פי 10 רק באותו חודש.</p>
              <div className={styles.testimonialHighlight}>עסקת 38,000 ש״ח · בשבועיים מיום ההשקה</div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>DK</div>
                <div>
                  <strong>דניאל ק.</strong>
                  <span>מנכ״ל, ייעוץ משאבי אנוש לחברות · הרצליה</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section id="fit">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>האם זה מתאים לך?</div>
          <h2>זה נבנה בשביל<br /><span className={styles.gradientText}>סוג אחד של בעל עסק</span></h2>
          <div className={styles.fitGrid}>
            <div className={`${styles.fitBox} ${styles.fitYes}`}>
              <h3>✅ זה יתאים לך אם:</h3>
              <ul>
                <li>אתה מנהל עסק או סוכנות באוריינטציית B2B.</li>
                <li>אתה מקבל לידים נכנסים אך אין לך מערכת אוטומטית למיין אותם.</li>
                <li>אתה איש המכירות העיקרי בעסק ויש לך צוואר בקבוק במענה מכירות וסינון.</li>
              </ul>
            </div>
            <div className={`${styles.fitBox} ${styles.fitNo}`}>
              <h3>❌ זה כנראה פחות מתאים לך אם:</h3>
              <ul>
                <li>יש לך כמות קטנה מאוד של פניות נכנסות.</li>
                <li>אתה מחפש בניה מחדש של מערכת CRM שלמה ללא שילוב תהליכי AI אוטומטיים במכירות.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className={styles.container}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutAvatar}>AS</div>
            <div className={styles.aboutText}>
              <div className={styles.sectionLabel}>אודות</div>
              <h2>היי, אני אילון שפיגל —<br /><span className={styles.gradientText}>מייסד First Choice AI</span></h2>
              <p>אני בעל עסק וממייסדים בדיוק כמוך. אני יודע מה זה לנהל עסק שבו אתה המוצר, איש המכירות, המותג, וצוות התפעול בו זמנית.</p>
              <p>בניתי את ההצעה הזו כי גם לי הייתה אותה בעיה: לידים שנכנסו בלי מערכת למיון איכות הליד, והזדמנויות חמות שהתקררו בזמן שהייתי קבור במחקר עליהם או פשוט הייתי עסוק בשוטף.</p>
              <p className={styles.aboutPromise}>אם זה לא ירגיש נכון אחרי שיחת ההיכרות שלנו - אני אגיד לך. אני לוקח פרויקטים רק אם אני בטוח שאוכל להביא לך במערכת שאבנה תוצאות עם החזר השקעה ברור ומהיר.</p>
              <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary + " " + styles.btn}>← בוא נדבר על זרימת הלידים הקיימת שלך</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBg}></div>
        <div className={styles.container + " " + styles.ctaContent}>
          <h2>ליד לוהט יגיע<br /><span className={styles.gradientText}>השבוע מתישהו.</span><br />האם תדע שהוא כזה?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-slate-400">קבע שיחת היכרות חינמית של 20 דקות. נסתכל על זרימת הלידים הקיימת שלך בשביל להבין איך נראה ליד טוב בפרופיל האידאלי שלך, ואני אגיד לך בדיוק מה הייתי בונה עבור מערכת תהליכי המכירה.</p>
          <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge} ${styles.btnGlow}`}>
            ← קבע שיחה בחינם
          </a>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center">
        <div className={styles.container}>
          <div className={styles.logo}>First Choice <span>AI</span></div>
          <p className="mt-4 text-slate-400">© 2024 First Choice AI. נבנה עבור מייסדים ישראליים.</p>
        </div>
      </footer>
    </div>

  );
};

export default LeadsAI2;
