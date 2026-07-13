# Mind & Metric Media — Website Project Brief

## Project Overview
Build a 4-page static HTML website for Mind & Metric Media (MMM), an Auckland-based performance media agency. Deploy target: Vercel. No build step, no framework — plain HTML + CSS files only.

## File Structure to Build
```
mmm-website/
├── CLAUDE.md                  (this file)
├── brand/
│   └── colors_and_type.css   (brand CSS — reference this in every HTML file)
├── index.html                 (Home)
├── services.html              (Services)
├── about.html                 (About)
└── contact.html               (Contact)
```

## Tech Stack
- Plain HTML5 + CSS3 only
- No JavaScript frameworks
- No npm, no build tools
- CSS variables from brand/colors_and_type.css — inline into each page's <style> tag
- Google Fonts loaded via @import in the CSS file
- Mobile responsive using CSS Grid and clamp()

---

## Brand System (read carefully — enforce strictly)

### Colours
| Token | Hex | Use |
|---|---|---|
| --midnight | #0D1B2A | Page background, dark panels |
| --signal | #F5F0E8 | Light panels, cards |
| --ink | #0D1B2A | Body text on light surfaces only |
| --gold | #F0B429 | Accent on dark backgrounds |
| --teal | #00C9B1 | Accent on light backgrounds |
| --slate | #6B7C93 | Captions, labels, metadata ONLY — never body text |
| --panel-dark | #132336 | Dark stat/info card backgrounds |

**Critical rules:**
- ONE accent per surface: gold on dark, teal on light. Never both on same panel.
- --slate fails WCAG AA for body text — use only for eyebrows, captions, card numbers.
- --midnight and --ink share the same hex but are semantically separate. Never use --midnight for text or --ink for backgrounds.

### Typography
- Display/Headlines: Platypi (Google Font) — sentence case, weight 600–700, tracking -0.01em
- Body/Labels/Buttons/Nav: Space Grotesk (Google Font) — weight 300–400 for body, 600 for labels/buttons
- Labels and eyebrows: UPPERCASE, tracking +0.15em
- Headlines: sentence case — NOT ALL CAPS (Platypi's letterforms carry the weight)

### Layout
- Default surface: midnight page background, signal panels on top
- Panel border-radius: 12px
- Panel border: 1px solid rgba(240, 180, 41, 0.25) — ghost gold on dark surfaces
- Button border-radius: 6px (rectangular, not capsule)
- Gold fill button on dark surfaces. Teal outline button on light surfaces.
- Section margin: 16px
- No gradients. No drop shadows. No blur. No glassmorphism.
- No box-shadow on any card or panel.

### Voice
- Institutional tone. "Mind & Metric Media" not "we" or "I".
- Metric-first language. No jargon without an outcome attached.
- Bullet points use — (em dash) only. No dots, arrows, chevrons.
- No emoji anywhere. No exclamation marks anywhere.
- Credentials stated once, factually, near the top.
- No "data-driven", "unlock", "discover", "empower", "leverage", "strategic partner", "Auckland's best", "full-service".

### Photography
- No stock photography. No posed images. No AI-generated people.
- About page: use placeholder divs for Walker's award photos. Label them clearly with HTML comments: <!-- INSERT: [description of photo] -->
- If no real image, use a dark panel with the --slate colour and a text label.

---

## Navigation
All pages share the same sticky header:
- Left: wordmark "MIND & METRIC MEDIA" (Space Grotesk, uppercase, tracking 0.18em)
- Centre: nav links — HOME / SERVICES / ABOUT / CONTACT
- Right: CTA button — "BOOK A CALL →" linking to https://calendly.com/walkerzhao

---

## Page 1: index.html (Home)

### Section 1 — Hero
Full-viewport hero. Dark background (--midnight). Signal panel on left with headline, dark stat cards on right.

Eyebrow label: "01 — PERFORMANCE MEDIA"

Headline (Platypi, very large):
MMM.

Subhead (Space Grotesk, body weight):
Yes, like the chocolate. Also like Marketing Mix Modeling — the discipline that actually answers whether advertising is working. That's not a coincidence. That's the whole point.

Mind & Metric Media builds and runs paid media systems for businesses that are done guessing.

CTA button (gold, dark): "SEE WHAT WE DO →" — links to services.html

Proof block (3 dark stat cards stacked on right):
Card 01: "Google Honours Agency SuperStar Award, 2025"
Card 02: "10+ years across SEM and programmatic — WPP, AA New Zealand, Coca-Cola, Nestlé and Carlsberg"
Card 03: "Auckland-based. Working remotely across New Zealand."

### Section 2 — Philosophy (numbered list)
Light signal panel. Teal accent.

Eyebrow: "02 — THE PROBLEM"

Three numbered points (em dash bullets, large body text):
01 — Most ad spend has never been tested to confirm it's driving new customers — not just intercepting ones who were already going to buy.
02 — Optimising channels in isolation often makes the overall system perform worse.
03 — Following platform "best practice" is a reliable path to average results.

### Section 3 — Chimp Callout
Full-width dark card (--panel-dark background). Large Platypi text. Gold accent. Maximum visual impact — this should feel like a pattern interrupt. Three short paragraphs, each on its own line, large type, generous line spacing:

"A lot of people believe AI can now automate their way to results.

That's because they haven't seen a chimpanzee with a machine gun.

The tool is only as good as the judgment behind it."

### Section 4 — Google Stat Block
Dark background. Two massive stat numbers in gold (Space Grotesk, 700 weight, very large). Side by side or stacked.

Label above: "WHAT MEDIA BUDGET AS AN INVESTMENT LOOKS LIKE"

Stat 1:
Number: $10,000
Label: "invested in Google's IPO, August 2004"

Stat 2:
Number: $824,800
Label: "value today — a return of 8,148%"

Body text below the stats (Space Grotesk, regular weight, --signal-60 colour):
Nobody asked their broker "did the trade run?" They asked "did it return?"

The only question that matters: why should your media budget be held to a lower standard?

### Section 5 — Anti-Cliché Statement
Full-width signal panel. Large Platypi text on left. Teal outline button on right.

Large headline:
"Mind & Metric Media is not data-driven. Not Auckland's best. Not full-service. Not a strategic partner."

Body text:
Every agency says those things. They have stopped meaning anything.

The question this agency starts every engagement with: what would happen if we didn't spend this money?

If you don't know the answer, that's where we start.

CTA button (teal outline, on light): "START HERE →" — links to contact.html

---

## Page 2: services.html (Services)

### Hero
Eyebrow: "02 — SERVICES"
Headline: "Two channels. One system. One question."
Body: Search and programmatic control the majority of measurable performance spend. They're also where most budgets are most consistently misallocated — not through negligence, but because both channels are designed to make optimisation look like strategy.

### Service 1 — Search Engine Marketing
Dark panel with gold accent border.

Label: "01 — SEARCH ENGINE MARKETING"
Subhead: Paid search across Google and Bing. Strategy through to execution.

Points (em dash):
— Incrementality testing: establishing what search is actually driving versus what it's claiming credit for
— Bid architecture that doesn't defer to platform black boxes
— Cross-engine management with unified attribution, not parallel reports
— Campaign structures built for signal efficiency, not dashboard aesthetics

"Who this is for" callout (smaller, --slate colour):
Businesses spending $5,000–$100,000+ per month on paid search who have a suspicion the numbers are too good.

### Service 2 — Programmatic Advertising
Light signal panel with teal accent border.

Label: "02 — PROGRAMMATIC ADVERTISING"
Subhead: Managed DSP buying across display, video, and connected channels.

Points (em dash):
— Supply path optimisation before the campaign launches, not after
— Audience architecture from first-party data, not platform-default segments
— Delivery reporting that distinguishes humans from bots
— Custom solutions where standard formats have hit diminishing returns

"Who this is for" callout:
Brands that have run programmatic and found the results beautiful but unexplainable.

### How It Works
Dark panel.
Label: "03 — HOW IT WORKS"
Body: Retainer or project. No lock-in contracts. All reporting in plain numbers — no proprietary dashboards designed to obscure the answer.

CTA: "BOOK A DIAGNOSTIC CALL →" links to contact.html

---

## Page 3: about.html (About)

### Hero
Eyebrow: "03 — ABOUT"
Headline: "Walker Zhao"
Sub-label (Space Grotesk uppercase, --slate): "FOUNDER, MIND & METRIC MEDIA"

### Career Narrative
Two-column layout on desktop (text left, photo placeholder right).

Body text:
The career started in FMCG — Nestlé, Coca-Cola, Carlsberg, across China. Managing budgets, running campaigns, watching what actually moved volume versus what looked good in a deck. That foundation installs a question that doesn't go away: did this advertising work, or did it just spend?

New Zealand, 2021. A rapid progression through digital performance: hands-on search management, then leading GroupM Nexus activation teams across paid search, paid social, and programmatic at Mindshare, then Digital Performance Director at WPP Media Australia & New Zealand. A decade inside the largest media networks in the world, running campaigns for clients across travel, retail, automotive, education, and finance.

Mind & Metric Media exists because the question from 2013 still doesn't get answered often enough.

Photo placeholder (right column):
<!-- INSERT: Walker's professional photo -->
Use a --panel-dark div, 400px tall, with label "[ Photo ]" in --slate text.

### Credentials
Dark panel. Label: "CREDENTIALS"

Two credential rows (em dash, each on its own line — the Google Agency Excellence
and IAB Best Performance Campaign awards belong to Walker's previous agency (WPP)
and must not appear on this site):
— Winner — Google Honours Agency SuperStar Award, Q2 2025
— Finalist — IAB New Zealand Digital Advertising Awards, Emerging Talent, 2023

### Award Photos Section
Label: "04 — RECOGNITION"
Three placeholder boxes side by side (desktop), stacked (mobile):
<!-- INSERT: Google Honours award photo 2025 -->
<!-- INSERT: IAB Awards photo 2023 -->
<!-- INSERT: Additional award photo -->

Each placeholder: --panel-dark background, 300px tall, centred label in --slate.

---

## Page 4: contact.html (Contact)

### Hero
Eyebrow: "04 — CONTACT"
Large Platypi headline: "Start with a question"

### Body
Signal panel.

Body text:
If you're spending money on paid search or programmatic and you're not certain it's working — or you need to move faster than your current setup allows — the first conversation is diagnostic, not commercial.

Mind & Metric Media works with a small number of clients at a time. If the numbers don't support working together, that's what the call is for.

Auckland, New Zealand.

### CTA Section
Two action items, clearly separated:

Primary (gold button):
"BOOK A 30-MIN DIAGNOSTIC CALL →"
Link: https://calendly.com/walkerzhao
Sub-label below button (--slate): "No pitch. No obligation. 30 minutes."

Secondary (plain text link):
"Or email: walkerzhao@mindandmetricmedia.co.nz"

---

## Footer (all pages)
Dark midnight background.

Left: "MIND & METRIC MEDIA" wordmark
Centre: Nav links — HOME / SERVICES / ABOUT / CONTACT
Right: "walkerzhao@mindandmetricmedia.co.nz"

Bottom line (very small, --slate):
"Google Honours Agency SuperStar Award 2025 — Auckland, New Zealand — © 2025 Mind & Metric Media Limited"

---

## Global Don'ts — Enforce on Every File
- No box-shadow anywhere
- No gradients anywhere
- No blur or glassmorphism
- No capsule buttons (border-radius max 6px on buttons)
- No gold and teal on the same panel
- No emoji
- No exclamation marks in any copy
- No --slate as body text colour
- No stock photography or placeholder image services (use styled divs instead)
- No inline styles where a CSS class exists
- All external links open in new tab (target="_blank" rel="noopener")

---

## Responsive Behaviour
- Mobile breakpoint: 768px
- Below 768px: all grids collapse to single column
- Hero stat cards stack below headline on mobile
- Navigation collapses to a hamburger menu on mobile (simple CSS toggle, no JS library)
- Font sizes use clamp() — already defined in colors_and_type.css

---

## Deployment Notes
- This is a static site — no server-side code
- All files stay in the root mmm-website/ folder
- Vercel will auto-detect and serve index.html as the root
- No vercel.json config needed for a pure static site
