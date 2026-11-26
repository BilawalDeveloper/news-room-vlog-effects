# News Room Vlog Effects

A structured catalog of reusable 3D / broadcast effects designed for browser-based vlogs and virtual news rooms, with a strong focus on **AI news** and cinematic hero reveals.

These effects are meant to be displayed **inside** the navy/gold circular-stage news room (or any matching virtual studio).

## Features
- Consistent dark navy + gold visual language (color theme is switchable)
- Full AI News Effects Catalog with detailed usage guidance for AI assistants
- Cinematic Hero Effects (neural explosions, data waterfalls, particle reveals, agent swarms, etc.)
- Three.js 3D viewer with orbit controls, growing bars, and cinematic reveal trigger
- **Data-driven board** — headline, gauge, rows, and footer are real values, not a baked image

## Structure
- `effects-catalog.json` — General catalog of 100 effects
- `ai-news-effects-catalog.json` — Dedicated AI news catalog (including Cinematic Hero Effects)
- `themes.json` — Color theme variants (navy-gold, red-alert, teal-modern, purple-premium)
- `viewer/index.html` — Simple 2D browser viewer
- `viewer/threejs-room.html` — Full Three.js 3D news room
- `viewer/board.js` — Draws the chassis from a value object
- `viewer/live-values.html` — Studio plate you can type into, or drive from script

## Put real values on the board
Open `viewer/live-values.html`, or from your vlog page:

```js
SignalBoard.show({
  kicker: "AI REGULATION ALERT",
  headline: "EU AI ACT",
  subline: "COMPLIANCE ALERT: HIGH-RISK AI SYSTEMS",
  gauge: 62,
  status: "PARTIALLY COMPLIANT",
  gaugeCaption: "COMPLIANCE LEVEL",
  rows: ["RISK ASSESSMENT", "DATA GOVERNANCE", "TRANSPARENCY", "HUMAN OVERSIGHT"],
  footerLabel: "Deadline for Compliance:",
  footerValue: "August 2, 2026",
  accent: "#ff2a2a"
});
```

`gauge` is 0–100. `rows` is up to four strings. Change any field and the plate repaints.

## Usage
- Open `viewer/live-values.html` to type live numbers onto the board.
- Open `viewer/threejs-room.html` for the circular stage.
- Refer to the AI catalog for `best_for` and `usage` notes when building AI-focused segments.

Created for the navy/gold virtual news studio project.
