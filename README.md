# Groove Tycoon

An 8-bit record shop sim. Run a record shop in an old canal house in Amsterdam from 2070 to 2089, selling to humans, cyborgs and robots.

- Fill crates with the genres people want. Tastes change every year (Synthwave, Bot-Pop, Gridpunk, Neuro-Rap and more).
- Hit yearly goals, pick perks, research upgrades and climb the career ranks.
- Arrange your shop, hire bots, add a synth-caf bar, then open branches from Neo Tokyo to Mars.
- Look after Biscuit the shop dog and Pixel the shop cat. Feed them, pet them and rename them (Pets tab). Happy pets add vibe.
- Throw a record store party or an album release party (Party tab). The shop goes dark, the lights come up and the crowds pour in.

## Play

Open `index.html` in a browser. No build step and no dependencies. Fonts load from Google Fonts.

Controls: Space pauses, 1/2/3 sets the speed, A toggles Arrange mode.

## Walk mode

Tap **Walk** to control your shopkeeper. Tap the floor to walk (or use the arrow keys, and E to interact). Tap a crate to walk over and restock it, tap the counter to go back to the register, and tap the door to step out onto the canal street. Outside you can grab a stroopwafel, sit on the bench, or put up flyers on the notice board (more shoppers that month). Customers only get served while you're at the register, unless you've hired clerk bots.

## Saving

The game autosaves to your browser every in-game month, and **Continue** appears on the title screen. To back up a game or move it to another device, tap **Export save** to download a `.json` save file, then use **Import save** (or **Load save file** on the title screen) to load it.

## Files

- `index.html`: page layout
- `style.css`: styles
- `sprites.png`: the pixel-art sprites the game uses (see Credits)
- `game.js`: all the game logic and pixel-art drawing. The world uses a 256×144 pixel grid, drawn at 3× (768×432) so lighting, shading and fine details can sit between the big pixels.

## Credits

Character, prop and neon sign sprites are from the **Cyberpunk / Sci-Fi City Exterior 16x16 Tileset** and **Cyberpunk Interiors 16x16** by [BeeZeeBox](https://beezeebox.itch.io/), used under the pack license (free for personal and commercial use, editing allowed). Only the pieces the game uses are included, combined into `sprites.png`. The original asset packs are not redistributed here. Get them from the artist's itch.io page.
