# Rivera Royale

A one-evening Christmas game show for the family, run from one tablet or phone.

Each person is called up and asked one question: **Pera o Kapalaran?**

- **Pera**: take the ₱300.
- **Kapalaran**: leave the ₱300 and roll three dice for whatever they add up to.

| Die | Its six sides (the last is the gold star side) |
| --- | --- |
| 1 | ₱20, ₱25, ₱30, ₱35, ₱40, ₱50 |
| 2 | ₱50, ₱55, ₱70, ₱80, ₱90, ₱100 |
| 3 | ₱0, ₱20, ₱50, ₱100, Roulette, ₱1,000 |

**Roulette.** If die 3 lands on its Roulette side, the player spins a wheel for ₱0, ₱20, ₱50, ₱100,
₱500, ₱1,000 or the Jackpot (a Mystery Bag). Each prize can be won once; after that it is off the
wheel for everyone else.

**Finale.** When everyone has played, the lowest roller (who doesn't already hold a Mystery Bag) is
asked to keep their winnings or hand them back for a Mystery Bag. A tie is settled by a roll-off.
If nobody won the roulette Jackpot, the host can offer that bag to the next lowest roller.

A roll pays ₱70 to ₱1,150 in cash, about ₱342 on average. The dice and the wheel are drawn fairly,
and each result is fixed and saved the instant the dice are let go; the tumble and the spin only
reveal it.

## Running the show

1. Open the game, add everyone's name, and tap **Start the show** for the intro.
2. Tap a name (or **Pick someone for me**) to call that person up, then tap Pera or Kapalaran.
3. On the dice stage, tap anywhere to throw, or hold the screen to shake first.
4. When everyone is done, tap **Reveal the lowest roller**.

**Host tools** at the bottom of the lobby shows what to pay out and who holds each Mystery Bag,
lets you pick and test the announcer's voice, replay the intro, redo or remove a turn, undo the
finale, clear all results while keeping the names (use that after a practice round), or erase
everything.

**Voiceover.** The announcer speaks in a Claude voice when the page is opened as a Claude artifact
in a Chromium browser such as Chrome. Elsewhere it uses the device's built-in voice where there is
one, and every line always appears as text on screen.

## Files

- `pamasko-dice.html` is the game. It is the source for the published Claude artifact, where the
  record is saved to the artifact's shared database.
- `index.html` is the same game wrapped as a standalone page (open it directly or host it
  anywhere). There the record is saved in that browser only, so play the whole game on one device.
- `build.mjs` regenerates `index.html` after editing `pamasko-dice.html`: `node build.mjs`.

The amounts, the wheel and the intro script are near the top of the script in `pamasko-dice.html`
(`STAKE`, `DICE`, `WHEEL`, `introBeats`, `lines`). Each die needs exactly six sides.
