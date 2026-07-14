# O'Leary Labs Site

Static site for O'Leary Labs — a single self-contained `index.html` (HTML +
CSS only, no JavaScript, no build step) plus brand assets in `assets/`.

## Structure

- `index.html` — the entire site: markup and styles inline
- `assets/oleary_labs_logo_kit/` — O'Leary Labs logo kit (mark, wordmark, full logo, app icon)
- `assets/bracket/` — Bracket project brand assets, sourced from the local
  `../../BRACKET/migration/public` project
- `assets/logo-mark.svg` — Signet mark

## Brand

Colors and type follow the O'Leary Labs style guide:

| Name              | Hex       | Usage                                   |
| ----------------- | --------- | --------------------------------------- |
| Smoked Pearl      | `#eee8dd` | Page atmosphere and broad sections      |
| Old Graphite      | `#211d19` | Dense type, icon grounds, dark accents  |
| Oxblood Red       | `#91131b` | Primary actions and decisive emphasis   |
| Aged Brass        | `#b9863f` | Rules, premium details, quiet highlights|
| Deep Signal Green | `#1f533f` | Live-state signals, used sparingly      |

Type: oldstyle serif display (Newsreader / Iowan Old Style stack), humanist
sans interface (Inter), mono for technical details (JetBrains Mono).

## Development

Open `index.html` in a browser, or serve the repo root with any static file
server:

```bash
python3 -m http.server
```

## Deployment

Deploy the repo root as-is to any static host — no build step required.
