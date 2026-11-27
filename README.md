# Groove Tycoon

An 8-bit record shop sim. Run a record shop in an old canal house in Amsterdam from 2070 to 2089, selling to humans, cyborgs and robots.

- Fill crates with the genres people want. Tastes change every year (Synthwave, Bot-Pop, Gridpunk, Neuro-Rap and more).
- Hit yearly goals, pick perks, research upgrades and climb the career ranks.
- Arrange your shop, hire bots, add a synth-caf bar, then open branches from Neo Tokyo to Mars.

## Play

Open `index.html` in a browser. No build step and no dependencies. Fonts load from Google Fonts.

Controls: Space pauses, 1/2/3 sets the speed, A toggles Arrange mode.

## Saving

The game autosaves to your browser every in-game month, and **Continue** appears on the title screen. To back up a game or move it to another device, tap **Export save** to download a `.json` save file, then use **Import save** (or **Load save file** on the title screen) to load it.

## Files

- `index.html`: page layout
- `style.css`: styles
- `game.js`: all the game logic and pixel-art drawing. The world uses a 256×144 pixel grid, drawn at 3× (768×432) so lighting, shading and fine details can sit between the big pixels.
