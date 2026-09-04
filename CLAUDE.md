# Project context: aylonspigel.com

## Repo & deployment
- Repo: https://github.com/frontEndExpert/aylonspigel.git
- **Live branch is `choice2`** — a Next.js (Pages Router) app, static export (`output: "export"`, `distDir: "_static"`, `trailingSlash: true`)
- Other branches (`master`, `first-choice`, `next-choice`) are NOT what's deployed — don't assume they match production
- IMPORTANT: the live site currently has content in `business.jsx` / `Portfolio.jsx` (hero copy, value-prop cards, case studies, Loom video section) that does NOT match what's in the `choice2` zip previously exported — the live site has diverged further. Verify against the actual live page (aylonspigel.com) or a fresh export before assuming any component's current content.
- Site has separate Hebrew (`/`) and English (`/index-en`) versions. English version has content parity issues — missing About/Portfolio/Testimonials sections that exist on the Hebrew version.

## Business context
- Owner: Aylon Spigel, based in Hadera, Israel. Frontend developer background, building an AI-automation + productized-services business targeting Israeli small businesses.
- Brand name: **First-Choice-AI** (previously called "Graphify" — that name is retired, don't reuse it).

## Current offers
1. **WhatsApp AI Agent services** — primary offer, ~₪3,500/client, for local Israeli small businesses (restaurants, salons, dental clinics, gyms, real estate agents). Not yet built/packaged as a repeatable product.
2. **AI Lead Qualification Automation ("Lead IQ")** — secondary offer, ₪3,500 fixed price. Built in Make.com: webhook intake → Google Sheets logging → AI research/scoring via Perplexity → Gmail alert for qualified leads. No WhatsApp step yet. Live interactive demo already deployed at **aylonspigel.com/leadsDemo** (embedded on the homepage too, in an "Offers" section between the Business and Portfolio components).
3. **Ebook**: "המדריך השלם לשיווק ורכישת לקוחות" (The Complete Guide to Marketing & Customer Acquisition) — 8 chapters, Hebrew, sold on Gumroad at **₪148**.

## Known issues to fix
- The Loom video embed in the case-study/portfolio section of the homepage appears to render as a literal pasted URL/text instead of a working `<iframe>` video player — likely broken, needs a real embed.
- Two sections on the homepage share nearly identical headings ("חיסכון של אלפי שקלים, לא רק הבטחות" vs "...ולא רק הבטחות") — one is the top value-prop cards, the other is the real case-studies section further down. Confusing for visitors scrolling past the first one thinking they've seen the second. Should be renamed to be distinct.
- Recommended fix: reposition the Loom video to sit next to/near the interactive Lead IQ demo (framed as "try it yourself" vs "watch it explained") rather than buried near the bottom of the case-studies section.

## Promotion constraints
- Blocked from running paid Facebook ads — organic/free promotion only (group posts, warm outreach, LinkedIn, local walk-ins).
- Funnel logic being used: Ebook (₪148, low commitment) → Lead IQ (₪3,500) → WhatsApp Agent (₪3,500) — each offer should nudge toward the next for prospects not ready for the bigger commitment.
