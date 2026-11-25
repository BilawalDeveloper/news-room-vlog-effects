# News Room Vlog Effects

A structured catalog of **100 reusable 3D / broadcast effects** designed for browser-based vlogs and virtual news rooms.

These effects are meant to be displayed **inside** the navy/gold circular-stage news room (or any matching virtual studio).

## Features
- Consistent dark navy + gold visual language (color theme is switchable)
- Categories covering breaking news, finance, tech/AI, products, sports, weather, politics, data viz, lower thirds, and atmosphere
- Ready for loading as overlays, lower-thirds, full-screen graphics, stage elements, or camera moves
- Browser-friendly (HTML/CSS/JS, Three.js, or WebGL compatible)

## Structure
- `effects-catalog.json` — Full catalog of 100 effects with id, name, category, type, and description
- `themes.json` — Color theme variants (navy-gold, red-alert, teal-modern, purple-premium)
- `viewer/index.html` — Simple 2D browser viewer with stage and sample effects + theme switching
- `viewer/threejs-room.html` — **Full Three.js 3D news room** with circular stage, lighting, orbit controls, and loadable 3D text panels for effects

## Categories
1. Breaking & Alerts
2. Finance & Markets
3. Tech & AI
4. Product & Reviews
5. Sports
6. Weather
7. Politics & Elections
8. Data Visualization
9. Lower Thirds & Banners
10. Transitions & Atmosphere

## Usage in Browser Vlog
- Open `viewer/index.html` for the lightweight 2D version.
- Open `viewer/threejs-room.html` for the full 3D experience (drag to orbit, scroll to zoom, click buttons to load effects as 3D panels).

The room acts as the main persistent environment; individual effects are loaded and animated in/out on demand. Switch color themes via the buttons in the viewers.

## Next Steps
- Expand Three.js effects with more 3D models, particle systems, and data-driven charts
- Create animated preview GIFs for each effect
- Add more interactive controls and data binding

Created for the navy/gold virtual news studio project.
