# Pamasko Dice

A one-evening Christmas game for the family. Everyone starts with ₱300 and makes one choice:

- **Keep it**, or
- **hand it back and roll three dice** for whatever they show.

| Die | Its six sides (the last is the gold star side) |
| --- | --- |
| 1 | ₱20, ₱25, ₱30, ₱35, ₱40, ₱50 |
| 2 | ₱50, ₱55, ₱70, ₱80, ₱90, ₱100 |
| 3 | ₱0, ₱10, ₱20, ₱50, ₱100, ₱1,000 |

So a roll pays between ₱70 and ₱1,150, about ₱304 on average; only the ₱1,000 side (1 roll in 6)
beats the ₱300. Every result goes on the record. At the end, the two lowest rollers can keep their
winnings or hand them back for a Mystery Bag; ties are settled by a roll-off (each tied player
rolls one die, lowest roll gets the offer).

Rolling: tap anywhere to throw, or hold the screen to shake the dice and let go to throw. The
result is fixed and saved the instant the dice are let go; the tumble only reveals it.

## How to run it on the day

1. Open the game on one phone or tablet and add everyone's name.
2. Pass the screen around. Each person taps their own name (or tap **Pick someone for me**),
   then keeps the money or rolls.
3. When everyone is done, tap **Reveal the two lowest** and follow the finale.

**Host tools** at the bottom of the home screen shows how much to pay out, and lets you redo a
turn, remove a name, undo the finale, clear all results while keeping the names (use that after a
practice round), or erase everything.

## Files

- `pamasko-dice.html` is the game. It is the source for the published Claude artifact, where the
  record is saved to the artifact's shared database.
- `index.html` is the same game wrapped as a standalone page (open it directly or host it
  anywhere). There the record is saved in that browser only, so play the whole game on one device.
- `build.mjs` regenerates `index.html` after editing `pamasko-dice.html`: `node build.mjs`.

The amounts and the number of Mystery Bag spots are the constants at the top of the script in
`pamasko-dice.html` (`STAKE`, `DICE`, `BAG_SLOTS`). Each die needs exactly six sides, listed lowest
to highest.
