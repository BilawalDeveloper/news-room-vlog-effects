# News Room Vlog Effects

A structured catalog of reusable 3D / broadcast effects designed for browser-based vlogs and virtual news rooms, with a strong focus on **AI news** and cinematic hero reveals.

These effects are meant to be displayed **inside** the navy/gold circular-stage news room (or any matching virtual studio).

## Features
- Consistent dark navy + gold visual language (color theme is switchable)
- Full AI News Effects Catalog with detailed usage guidance for AI assistants
- Cinematic Hero Effects (neural explosions, data waterfalls, particle reveals, agent swarms, etc.)
- Three.js 3D viewer with orbit controls, growing bars, and cinematic reveal trigger
- Ready for loading as overlays, lower-thirds, full-screen graphics, stage elements, or camera moves

## Structure
- `effects-catalog.json` — General catalog of 100 effects
- `ai-news-effects-catalog.json` — Dedicated AI news catalog (including Cinematic Hero Effects)
- `themes.json` — Color theme variants (navy-gold, red-alert, teal-modern, purple-premium)
- `viewer/index.html` — Simple 2D browser viewer
- `viewer/threejs-room.html` — Full Three.js 3D news room with interactive effects (including Growing Bars and Cinematic Reveal)

## Key Categories
- Model Releases, Benchmarks, Company Comparisons, Funding, Safety, Compute, Agents, Research, Regulation, Market
- **Cinematic Hero Effects** for high-impact moments

## Usage
- Open `viewer/threejs-room.html` for the full 3D experience.
- Click buttons to load effects. Try **Cinematic Reveal** for the out-of-the-box style.
- Refer to the AI catalog for `best_for` and `usage` notes when building AI-focused segments.

## Development Workflow
Feature branches + Pull Requests are used for changes. Current feature branch: `feature/cinematic-and-ai-effects`.

Created for the navy/gold virtual news studio project.
