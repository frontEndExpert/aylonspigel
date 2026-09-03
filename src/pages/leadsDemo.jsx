import React, { useState, useRef } from "react";
import App from "@/components/App";

const LEADS = [
  { name: "דנה כהן", company: "סוכנות ביטוח כהן", qualified: true, score: 92, note: "מחפשת פוליסת עסק, תקציב גבוה" },
  { name: "ליד לא מזוהה", company: "טופס ללא פרטים", qualified: false, score: 18, note: "מספר לא תקין" },
  { name: "אבי לוי", company: "לוי שיפוצים", qualified: true, score: 88, note: "פרויקט משרד, זמין השבוע" },
  { name: "בדיקה בלבד", company: "לא ידוע", qualified: false, score: 24, note: "כנראה מילוי מקרי" },
  { name: "מיכל ברק", company: "ברק ייעוץ עסקי", qualified: true, score: 95, note: "10 עובדים, רוצה אוטומציה מיידית" },
];

const STAGES = [
  { icon: "⚡", label: "קליטה" },
  { icon: "📋", label: "רישום" },
  { icon: "✨", label: "חקירת AI" },
  { icon: "{ }", label: "עיבוד" },
  { icon: "🔍", label: "דירוג" },
  { icon: "✉", label: "התראה" },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function LeadsDemo() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [doneSet, setDoneSet] = useState(new Set());
  const [activeStage, setActiveStage] = useState(-1);
  const [inbox, setInbox] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [playLabel, setPlayLabel] = useState("הפעל הדגמה");
  const runToken = useRef(0);

  function reset() {
    runToken.current += 1;
    setRunning(false);
    setActiveIndex(-1);
    setDoneSet(new Set());
    setActiveStage(-1);
    setInbox([]);
    setFilteredCount(0);
    setPlayLabel("הפעל הדגמה");
  }

  async function run() {
    if (running) return;
    const myToken = ++runToken.current;
    setRunning(true);
    setPlayLabel("מריץ...");
    setInbox([]);
    setFilteredCount(0);
    const localDone = new Set();
    setDoneSet(new Set());

    for (let i = 0; i < LEADS.length; i++) {
      if (myToken !== runToken.current) return;
      setActiveIndex(i);
      setActiveStage(-1);

      for (let s = 0; s < STAGES.length; s++) {
        await sleep(220);
        if (myToken !== runToken.current) return;
        setActiveStage(s);
      }

      await sleep(300);
      if (myToken !== runToken.current) return;

      if (LEADS[i].qualified) {
        setInbox((prev) => [LEADS[i], ...prev]);
      } else {
        setFilteredCount((c) => c + 1);
      }

      localDone.add(i);
      setDoneSet(new Set(localDone));
      setActiveStage(-1);
      await sleep(250);
    }

    if (myToken !== runToken.current) return;
    setActiveIndex(-1);
    setPlayLabel("הפעל שוב");
    setRunning(false);
  }

  return (
    <App
      title="הדגמה חיה - Lead IQ"
      description="הדגמה אינטראקטיבית: לידים נכנסים, נחקרים ומדורגים אוטומטית על ידי AI"
    >
      <div dir="rtl" className="max-w-2xl mx-auto py-16 px-5">
        <h1 className="text-white text-[28px] font-bold text-center mb-8">
          הדגמה חיה: סינון לידים אוטומטי ב-AI
        </h1>

        <div className="bg-[#111] border border-white/10 rounded-2xl p-7">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[#c9d3de] text-sm">לידים נכנסים</div>
            <div className="flex gap-2">
              <button
                onClick={reset}
                className="text-sm border border-white/20 text-white rounded-lg px-3 py-2"
              >
                איפוס
              </button>
              <button
                onClick={run}
                disabled={running}
                className="text-sm bg-[#f7b538] text-[#0d1b34] font-bold rounded-lg px-3 py-2 disabled:opacity-50"
              >
                {playLabel}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            {LEADS.map((lead, i) => {
              const isActive = i === activeIndex;
              const isDone = doneSet.has(i);
              return (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/10"
                  style={{
                    background: isActive ? "rgba(247,181,56,0.12)" : "transparent",
                    opacity: isDone ? 0.5 : 1,
                  }}
                >
                  <div className="text-sm text-white">
                    <span className="font-medium">{lead.name}</span>{" "}
                    <span className="text-[#8a8a86]">· {lead.company}</span>
                  </div>
                  {isActive && <span className="text-xs text-[#f7b538]">בעיבוד...</span>}
                  {!isActive && isDone && (
                    <span className={lead.qualified ? "text-green-400" : "text-[#8a8a86]"}>
                      {lead.qualified ? "✓" : "✕"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-6 gap-2 mb-6">
            {STAGES.map((stage, i) => {
              const isActive = i <= activeStage;
              return (
                <div key={i} className="text-center">
                  <div
                    className="w-10 h-10 mx-auto mb-1 rounded-full flex items-center justify-center text-base"
                    style={{ background: isActive ? "rgba(247,181,56,0.18)" : "#1a1a1a" }}
                  >
                    {stage.icon}
                  </div>
                  <div className="text-[10px] text-[#8a8a86]">{stage.label}</div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="text-[#c9d3de] text-sm">תיבת לידים מאושרים</div>
            <div className="text-[#8a8a86] text-xs">סוננו: {filteredCount}</div>
          </div>

          <div className="flex flex-col gap-2 min-h-[60px]">
            {inbox.map((lead, i) => (
              <div
                key={lead.name + i}
                className="bg-[#0d1b34] border border-white/10 rounded-xl p-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white">
                    <span className="font-medium">{lead.name}</span>{" "}
                    <span className="text-[#8a8a86] text-xs">· {lead.company}</span>
                  </div>
                  <span className="bg-green-900/40 text-green-300 text-xs px-2 py-0.5 rounded">
                    ציון {lead.score}
                  </span>
                </div>
                <div className="text-[#c9d3de] text-xs mt-1">{lead.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </App>
  );
}
