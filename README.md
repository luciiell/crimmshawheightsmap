# Crimmshaw Heights — Interactive Map

A from-scratch, full-screen interactive map prototype for GitHub Pages.

## Structure
- The aerial Crimmshaw Heights image fills the entire viewport.
- Hovering a mapped area highlights it and opens a short overview.
- Clicking an area transitions into a detail screen.
- The detail screen currently uses a visual placeholder for the future detailed map image.
- A side information panel provides the longer description.
- A bottom back button returns to the main map.

## Replacing a detail placeholder
When a detailed area image is ready, replace the placeholder layer in `styles.css`/`index.html` with an image and update the corresponding area record in `app.js`.

## Notes
The hotspot positions are intentionally editable percentage coordinates in `app.js`, making it easy to nudge them as the map artwork is refined.
