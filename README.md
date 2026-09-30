# Ludo Knowledge Game

This is a local, four-player Ludo-style board game with a spelling challenge built into play. Players take turns rolling the die and moving colored pieces; selected moves require the player to spell a vocabulary word before time runs out.

## Why Play

- Play together on one device with four players and editable player names.
- Practice vocabulary using word definitions and timed spelling prompts.
- Get letter hints as the answer timer runs down.
- Race pieces around the board, send opposing pieces back to start, and be the first player to finish all four pieces.

## Get Started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and run

```sh
git clone https://github.com/vobradovic17/ludo-knowledge-game.git
cd ludo-knowledge-game
npm ci
npm run dev
```

Open the local URL printed by Vite in your browser. Enter player names in the name fields. On your turn, roll the die and select an eligible piece. When a spelling prompt appears, type the word described and submit it before the timer expires; a correct answer lets the move proceed. Play continues around the four-color board until one player finishes all their pieces.

### Other commands

```sh
npm run lint     # Check the project with ESLint
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

Vocabulary entries, including words and definitions, are maintained in [`src/words.js`](src/words.js).

## Help

For a bug report, question, or feature request, [open an issue](https://github.com/vobradovic17/ludo-knowledge-game/issues). The application is a Vite-powered React project; see the [Vite guide](https://vite.dev/guide/) and [React documentation](https://react.dev/learn) for framework references.

## Maintainers and Contributions

The repository is maintained by [@vobradovic17](https://github.com/vobradovic17). Contributions are welcome: open an issue to discuss a change, then submit a pull request. Before submitting, run `npm run lint` and `npm run build`.
