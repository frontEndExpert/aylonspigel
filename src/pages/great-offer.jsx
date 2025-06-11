import React from "react";
import { Button } from "@/components/button";

export default function GreatOffer() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          🚀 שיווק חכם בלי כאב ראש
        </h1>
        <p className="text-lg md:text-xl mb-10">
          קבל חבילת תוכן חודשית לעסק שלך – פוסטים, גרפיקה, מאמרים וניוזלטרים, הכל מבוסס בינה מלאכותית!
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-100 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">חבילת בסיס</h2>
            <p className="mb-4">SEO מאמר + גרפיקה + 4 פוסטים בחודש ל </p>
            <p className="text-2xl font-bold mb-4">₪350/חודש</p>
            <Button className="w-full">בחר בחבילה</Button>
          </div>
          <div className="bg-blue-100 rounded-2xl p-6 shadow border-2 border-blue-400">
            <h2 className="text-xl font-semibold mb-2">חבילת פרימיום</h2>
            <p className="mb-4">עד 12 פוסטים, 2 מאמרים, ניוזלטר וניהול פרסום </p>
            <p className="text-2xl font-bold mb-4">₪700/חודש</p>
            <Button className="w-full">בחר בחבילה</Button>
          </div>
        </div>
        <form className="mt-12 text-left max-w-2xl mx-auto grid gap-4">
          <input className="border border-gray-300 rounded-lg p-3" placeholder="שם מלא" required />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="מספר טלפון" required />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="שם העסק" required />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="תחום העסק" required />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="קישורים לרשתות חברתיות (לא חובה)" />
          <textarea className="border border-gray-300 rounded-lg p-3" placeholder="הערות מיוחדות" rows={4} />
          <Button className="w-full mt-4">שלח טופס</Button>
        </form>
      </div>
    </div>
  );
}
