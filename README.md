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

Further along the canal:

- **The Green Canal coffeeshop:** buy a joint and smoke it (the screen goes wavy and colourful for a while), or save it for later.
- **Vending machines:** cigarettes, Neon Fizz soda, VOLT energy drinks (walk faster for 40 seconds) and snacks.
- **Own the vending machines:** buy any of the 6 street machines from its menu. Busier spots cost more and earn more. Each pays out every month, owned machines get a pink Groove sticker, and snacks are free for the owner. They're listed in the Chain tab.
- **Smoke button:** appears once you have joints or cigarettes, and lets you choose which.
- **Bicycle and motorcycle:** buy them in the Shop tab, then tap your parked ride (or press B) to ride the bike lane.
- **The Lucky 7:** a mafia casino with a poker room, blackjack (dealer stands on 17, blackjack pays 3 to 2) and Don Vinnie's booth.
- **Loans:** Don Vinnie lends money with zero interest (for now). Borrow or repay at his booth. If you would go bankrupt, he turns up with a rescue loan instead.

More to find:

- **DJ Fennec:** hire the fox-head DJ (Staff tab) and he plays at his own turntable booth, and shoppers dance. You can rename him.
- **Pets:** research the **Pet Auto-Feeder** and a little robot keeps Biscuit and Pixel fed.
- **Decor:** buy the **Interior designer** upgrade, then pick wallpaper and neon themes at the top of the Shop tab.
- **Aliens:** they now shop and stroll among the humans, robots and cyborgs.
- **The robbery:** happens once. Buy the **Pistol** (Shop tab) and you can shoot the robber, a security mech can tackle him, or you hand over the cash.
- **Bike lane:** cyclists and skateboarders, and about once per in-game day (one month) somebody wipes out and sits there seeing stars.
- **De Wallen:** the red light district stretch of the canal.
- **Fishing:** buy a **Fishing rod**, tap the canal and tap again when you see "!". Your catch is sold on the spot.
- **Houseboat:** buy it, then tap it to go aboard (nap, music, galley) or take the wheel and cruise the canal.
- **Romance:** Mira (barista), Nova-9 (android musician) and Zara (alien jazz singer) hang out on the canal street. Chat, give gifts, go on dates, and maybe become partners. Their lines live in `dialogue.js`, so you can edit them or add new characters.
- **The Lucky 7:** Texas Hold'em against three wiseguys, working slot machines, and blackjack.

Career ranks (goals completed): Garage Hopeful, Underground Upstart (3), Scene Staple (7), Cult Favourite (12), Regional Sensation (18), National Headliner (25), Galactic Superstar (33), Hall of Famer (42).

## Saving

The game autosaves to your browser every in-game month, and **Continue** appears on the title screen. To back up a game or move it to another device, tap **Export save** to download a `.json` save file, then use **Import save** (or **Load save file** on the title screen) to load it.

## Files

- `index.html`: page layout
- `style.css`: styles
- `dialogue.js`: romance characters and everything they say (easy to edit)
- `sprites.png`: the pixel-art sprites the game uses (see Credits)
- `game.js`: all the game logic and pixel-art drawing. The world uses a 256×144 pixel grid, drawn at 3× (768×432) so lighting, shading and fine details can sit between the big pixels.

## Credits

Character, prop and neon sign sprites are from the **Cyberpunk / Sci-Fi City Exterior 16x16 Tileset** and **Cyberpunk Interiors 16x16** by [BeeZeeBox](https://beezeebox.itch.io/), used under the pack license (free for personal and commercial use, editing allowed). Only the pieces the game uses are included, combined into `sprites.png`. The original asset packs are not redistributed here. Get them from the artist's itch.io page.
