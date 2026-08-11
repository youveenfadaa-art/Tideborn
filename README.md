# Tideborn Isles

Tideborn Isles is an original browser-based third-person action RPG prototype set on Driftwood Reach, a storm-battered island where combat, exploration, quests, and progression are tied together through a lightweight local game engine.

This Phase 1 slice is a standalone frontend project. It uses procedural canvas visuals and browser storage, so it does not need a server or an account.

## Current build

- Playable title screen and fast entry into Driftwood Reach
- Responsive third-person movement with WASD, sprinting, jumping, mouse-look, and dash
- Three-hit melee combo with hit detection, knockback feedback, blocking, energy costs, and floating damage feedback
- Rogue Marauder enemy AI with patrol, chase, attack, stagger, death, and respawn states
- Shrine keeper quest with acceptance, kill tracking, completion, and turn-in rewards
- Experience, levels, Shellmarks currency, and three Resonance stat paths
- Health, energy, XP, objective, ability, pause, help, settings, and stat HUD surfaces
- Local save, autosave, manual save, reset, and corrupted-save fallback behavior
- Original low-poly-inspired visual language using canvas primitives
- Responsive layout designed for modern Chromebook-sized screens

## Run locally

Install a current Node.js release and pnpm, then run:

```bash
pnpm install
pnpm dev
```

The game opens in the browser at the local Vite address.

## GitHub Pages deployment

The project is compatible with static hosting.

1. Upload the contents of this folder to a GitHub repository.
2. Push the repository's default branch to GitHub.
3. Open the repository's Actions tab and let `Deploy Tideborn Isles to GitHub Pages` finish.
4. In the repository settings, open Pages and confirm GitHub Actions is the source if GitHub asks.

For a project site hosted under a repository subpath, build with the relative asset mode:

```bash
GITHUB_PAGES=true pnpm build
```

This uses relative asset paths so the compiled site works from a GitHub Pages project URL.

## Controls

| Input | Action |
| --- | --- |
| W A S D | Move |
| Shift | Sprint |
| Space | Jump |
| Mouse movement | Look |
| Left click or F | Melee combo |
| Right click | Block |
| Q | Resonance dash |
| E | Speak, accept, or turn in a quest |
| P or Escape | Pause |

## Architecture

```text
src/
  App.tsx          React shell, HUD, menus, quest panels, and save wiring
  game-engine.ts   Input, movement, combat, enemy AI, progression, drawing, and save state
  index.css        Visual theme, responsive HUD, menus, and motion
  main.tsx         Application entry point
public/
  favicon.svg      Original project mark
```

The game engine keeps the core simulation independent from the React interface. React receives compact snapshots for the HUD, while the engine owns the canvas loop and moment-to-moment gameplay state. This keeps the first build lightweight and leaves clear extension points for later systems.

## Planned expansion

The source brief describes future phases for original supernatural powers, fighting styles, weapons, inventory, additional islands, boats, sea encounters, bosses, transformations, more quests, procedural VFX, audio, and broader progression. The current repository intentionally stops at a focused playable slice rather than pretending those systems are complete.

## Originality and assets

All gameplay code, terminology, UI, and visual effects in this project are original. No proprietary game source code, models, textures, sounds, maps, animations, or interface assets are included.

## Status

Phase 1 playable prototype. Suitable as a GitHub programming project foundation and as a base for continued browser-game development.