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
- `viewer/index.html` — Sample browser viewer that shows the news room stage and loads sample effects with theme switching

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
Open `viewer/index.html` in a browser to see the demo. Load any effect into the news room scene as:
- Floating 3D panels
- Lower thirds
- Full-screen graphics
- Stage-based elements
- Camera animations

The room acts as the main persistent environment; individual effects are loaded and animated in/out on demand. Switch color themes via the buttons in the viewer.

## Next Steps
- Add full Three.js / WebGL implementations for 3D depth
- Create animated preview GIFs for each effect
- Expand with more specific data-driven examples

Created for the navy/gold virtual news studio project.
