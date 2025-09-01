import React from "react";
import { Button } from "@/components/button";
import Image from "next/image";

export default function GreatOffer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 שיווק חכם בלי כאב ראש
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-600">
              קבל חבילת תוכן חודשית לעסק שלך – פוסטים, גרפיקה, מאמרים וניוזלטרים, הכל מבוסס בינה מלאכותית!
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">חבילת בסיס</h2>
                <p className="mb-4 text-gray-600">4 פוסטים חודשיים + גרפיקה + מאמר SEO</p>
                <p className="text-2xl font-bold mb-4 text-blue-600">₪350/חודש</p>
                <Button variant="primary" size="md" className="w-full">בחר בחבילה</Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-xl border-2 border-blue-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">מומלץ</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900">חבילת פרימיום</h2>
                <p className="mb-4 text-gray-600">12 פוסטים, 2 מאמרים, ניוזלטר וניהול פרסום</p>
                <p className="text-2xl font-bold mb-4 text-blue-600">₪700/חודש</p>
                <Button variant="primary" size="md" className="w-full">בחר בחבילה</Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative w-full h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="AI marketing illustration"
              fill
              className="rounded-2xl shadow-xl object-cover"
              priority
            />
          </div>
        </div>

        <form className="mt-16 text-left max-w-2xl mx-auto grid gap-4 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">הצטרף עכשיו</h2>
          <input 
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
            placeholder="שם מלא" 
            required 
          />
          <input 
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
            placeholder="מספר טלפון" 
            required 
          />
          <input 
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
            placeholder="שם העסק" 
            required 
          />
          <input 
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
            placeholder="תחום העסק" 
            required 
          />
          <input 
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
            placeholder="קישורים לרשתות חברתיות (לא חובה)" 
          />
          <textarea 
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none" 
            placeholder="הערות מיוחדות" 
            rows={4} 
          />
          <Button variant="primary" size="lg" className="w-full mt-4">שלח טופס</Button>
        </form>
      </div>
    </div>
  );
}


  