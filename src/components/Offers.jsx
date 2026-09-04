import React from "react";
import Link from "next/link";
import LeadIQDemo from "./LeadIQDemo";

  const Offers = ({ videoSection }) => {
  return (
    <div className="offers-section bg-black py-16 px-5" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-[32px] font-bold text-center mb-10">
          איך אני יכול לעזור לעסק שלך
        </h2>

        {/* ---- Primary offer: AI lead qualification service ---- */}
        <div className="package bg-white rounded-2xl p-8 mb-6 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-md">
            <h3 className="text-[#0d1b34] text-[22px] font-bold mb-2">
              אוטומציה עם בינה לסינון לידים ב-AI
            </h3>
            <p className="text-black text-[15px] leading-relaxed mb-3">
              אני בונה עבורך מערכת AI שחוקרת ומדרגת כל ליד ברגע שהוא נכנס - כך
              שהשיחה הראשונה בכל בוקר תמיד תהיה עם הליד הכי חם.
            </p>
            <Link href="/leadsDemo" className="text-[#f7b538] text-sm underline">
              לצפייה בהדגמה חיה &larr;
            </Link>
          </div>
          <div className="text-center">
            <div className="text-[#00ff00] text-[26px] font-extrabold">
              ₪3,500
            </div>
            <a
              href="#contact"
              className="inline-block mt-2 bg-brand-accent text-white font-bold py-2 px-6 rounded-lg"
            >
              קביעת אודיט חינם
            </a>
          </div>
        </div>

        <div className="package bg-[#0d1b34] rounded-2xl p-8 mb-6 items-center">
          <h3 className="text-white text-[22px] font-bold mb-6 text-center">
          סימולציה של האוטומציה
          </h3>
          <div>
            <p className="text-[#f7b538] text-sm font-semibold mb-3 text-center">
              נסו בעצמכם
            </p>
            <LeadIQDemo />
          </div>
          {videoSection?.videoUrl && (
            <div className="mt-8">
              <p className="text-[#f7b538] text-sm font-semibold mb-3 text-center">
                או צפו בהסבר
              </p>
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: '62.5%' }}>
                <iframe
                  src={videoSection.videoUrl}
                  title={videoSection?.title || 'הדגמת האוטומציה'}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* ---- Downsell: ebook ---- */}
        <div className="package border border-white/10 rounded-2xl p-8 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-md">
            <p className="text-white text-[22px] font-bold mb-2">
              עדיין לא מוכנים לאוטומציה מלאה?
            </p>
            <h3 className="text-white text-[20px] font-bold mb-2">
              <span className="text-[#f7b538]"> עשו זאת בעצמכם </span><br/>
               המדריך השלם לשיווק ורכישת לקוחות
            </h3>
            <p className="text-[#c9d3de] text-[15px] leading-relaxed">
              שמונה פרקים מעשיים להתחיל לבד - פרופיל לקוח, מיתוג, נוכחות
              דיגיטלית, פרסום ממומן בתקציב קטן ועוד.
            </p>
          </div>
          <div className="text-center">
            <div className="text-white text-[22px] font-extrabold">₪148</div>
            <a
              href="https://aylonspigel.gumroad.com/l/more-clients"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-white text-[#0d1b34] font-bold py-2 px-6 rounded-lg"
            >
              לרכישת המדריך
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Offers;
