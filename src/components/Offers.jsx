import React from "react";
import Link from "next/link";

const Offers = () => {
  return (
    <div className="offers-section bg-black py-16 px-5" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-[32px] font-bold text-center mb-10">
          איך אני יכול לעזור לעסק שלך
        </h2>

        {/* ---- Primary offer: AI lead qualification service ---- */}
        <div className="package bg-[#0d1b34] rounded-2xl p-8 mb-6 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-md">
            <h3 className="text-white text-[22px] font-bold mb-2">
              אוטומציה עם בינה לסינון לידים ב-AI
            </h3>
            <p className="text-[#c9d3de] text-[15px] leading-relaxed mb-3">
              אני בונה מערכות AI שחוקרות ומדרגות כל ליד ברגע שהוא נכנס - כך
              שהשיחה הראשונה בכל בוקר תמיד תהיה עם הליד הכי חם.
            </p>
            <Link href="/leadsDemo" className="text-[#f7b538] text-sm underline">
              לצפייה בהדגמה חיה &larr;
            </Link>
          </div>
          <div className="text-center">
            <div className="text-[#f7b538] text-[26px] font-extrabold">
              ₪3,500
            </div>
            <a
              href="#contact"
              className="inline-block mt-2 bg-[#f7b538] text-[#0d1b34] font-bold py-2 px-6 rounded-lg"
            >
              קביעת אודיט חינם
            </a>
          </div>
        </div>

        {/* ---- Downsell: ebook ---- */}
        <div className="package border border-white/10 rounded-2xl p-8 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-md">
            <p className="text-[#8a8a86] text-[13px] mb-1">
              עדיין לא מוכנים לאוטומציה מלאה?
            </p>
            <h3 className="text-white text-[20px] font-bold mb-2">
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
              href="https://gumroad.com/l/YOUR-PRODUCT-SLUG"
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
