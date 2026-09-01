//"use client"; // remove this line if you're not using Next.js App Router

import { useState, useRef } from "react";
import { Zap, Table2, Sparkles, Code2, Filter, Mail, RefreshCw, Play } from "lucide-react";

const LEADS = [
  { name: "דנה כהן", company: "סוכנות ביטוח כהן", qualified: true, score: 92, note: "מחפשת פוליסת עסק, תקציב גבוה" },
  { name: "ליד לא מזוהה", company: "טופס ללא פרטים", qualified: false, score: 18, note: "מספר לא תקין" },
  { name: "אבי לוי", company: "לוי שיפוצים", qualified: true, score: 88, note: "פרויקט משרד, זמין השבוע" },
  { name: "בדיקה בלבד", company: "לא ידוע", qualified: false, score: 24, note: "כנראה מילוי מקרי" },
  { name: "מיכל ברק", company: "ברק ייעוץ עסקי", qualified: true, score: 95, note: "10 עובדים, רוצה אוטומציה מיידית" },
];

const STAGES = [
  { icon: Zap, label: "קליטה" },
  { icon: Table2, label: "רישום" },
  { icon: Sparkles, label: "חקירת AI" },
  { icon: Code2, label: "עיבוד" },
  { icon: Filter, label: "דירוג" },
  { icon: Mail, label: "התראה" },
];

const COLORS = {
  surface1: "#eeece5",
  surface2: "#ffffff",
  textPrimary: "#1e262e",
  textSecondary: "#5f5e5a",
  textMuted: "#8a8a86",
  textAccent: "#0d1b34",
  textSuccess: "#27500a",
  border: "#e3e1da",
  borderStrong: "#cfccc2",
  bgAccent: "#e9edf3",
  bgAccentMuted: "rgba(233,237,243,0.7)",
  bgSuccess: "#eaf3de",
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function LeadIQDemo() {
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
    <div dir="rtl" style={{ fontFamily: "'Assistant', -apple-system, sans-serif", color: COLORS.textPrimary }}>
      <h2 style={visuallyHidden}>
        הדגמה אינטראקטיבית: לידים נכנסים, נחקרים ומדורגים אוטומטית על ידי AI, ורק המתאימים מגיעים כהתראה
      </h2>

      <div style={{ maxWidth: 640, margin: "0 auto", background: COLORS.surface2, border: `0.5px solid ${COLORS.border}`, borderRadius: 16, padding: "1.75rem" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div style={{ fontSize: 14, color: COLORS.textSecondary }}>לידים נכנסים</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={reset} style={btnStyle}>
              <RefreshCw size={16} aria-hidden="true" />
              <span>איפוס</span>
            </button>
            <button onClick={run} disabled={running} style={{ ...btnStyle, opacity: running ? 0.5 : 1, cursor: running ? "default" : "pointer" }}>
              <Play size={16} aria-hidden="true" />
              <span>{playLabel}</span>
            </button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1.5rem" }}>
          {LEADS.map((lead, i) => {
            const isActive = i === activeIndex;
            const isDone = doneSet.has(i);
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "8px 12px", borderRadius: 8,
                border: `0.5px solid ${COLORS.border}`,
                background: isActive ? COLORS.bgAccentMuted : COLORS.surface2,
                opacity: isDone ? 0.5 : 1,
                transition: "opacity 0.3s, background 0.3s",
              }}>
                <div style={{ fontSize: 14 }}>
                  <span style={{ fontWeight: 500 }}>{lead.name}</span>{" "}
                  <span style={{ color: COLORS.textMuted }}>· {lead.company}</span>
                </div>
                {isActive && <span style={{ fontSize: 12, color: COLORS.textAccent }}>בעיבוד...</span>}
                {!isActive && isDone && (
                  <span style={{ fontSize: 16, color: lead.qualified ? COLORS.textSuccess : COLORS.textMuted, display: "flex" }}>
                    {lead.qualified ? "✓" : "✕"}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gap: 8, marginBottom: "1.5rem" }}>
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = i <= activeStage;
            return (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: 40, height: 40, margin: "0 auto 6px", borderRadius: "50%",
                  background: isActive ? COLORS.bgAccent : COLORS.surface1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s",
                }}>
                  <Icon size={18} color={isActive ? COLORS.textAccent : COLORS.textSecondary} aria-hidden="true" />
                </div>
                <div style={{ fontSize: 11, color: COLORS.textMuted }}>{stage.label}</div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <div style={{ fontSize: 14, color: COLORS.textSecondary }}>תיבת לידים מאושרים</div>
          <div style={{ fontSize: 12, color: COLORS.textMuted }}>סוננו: {filteredCount}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, minHeight: 60 }}>
          {inbox.map((lead, i) => (
            <div key={lead.name + i} style={{
              background: COLORS.surface2, border: `0.5px solid ${COLORS.border}`,
              borderRadius: 12, padding: "0.75rem 1rem",
              animation: "leadFadeIn 0.3s ease",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontWeight: 500, fontSize: 14 }}>{lead.name}</span>{" "}
                  <span style={{ color: COLORS.textMuted, fontSize: 13 }}>· {lead.company}</span>
                </div>
                <span style={{ background: COLORS.bgSuccess, color: COLORS.textSuccess, fontSize: 12, padding: "2px 8px", borderRadius: 8 }}>
                  ציון {lead.score}
                </span>
              </div>
              <div style={{ fontSize: 13, color: COLORS.textSecondary, marginTop: 4 }}>{lead.note}</div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes leadFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const btnStyle = {
  display: "flex", alignItems: "center", gap: 6,
  fontFamily: "inherit", fontSize: 14, padding: "8px 14px",
  borderRadius: 8, border: `0.5px solid ${COLORS.borderStrong}`,
  background: COLORS.surface2, color: COLORS.textPrimary, cursor: "pointer",
};

const visuallyHidden = {
  position: "absolute", width: 1, height: 1,
  overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap",
};
