# MindLoomInfo

Public website for MindLoom, the AI organisation brain.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: the problem, the solution, the agents, teams, why now |
| `how-it-works.html` | Loombot, the four agents (Weaver, Keeper, Lens, Shuttle), MindLoom Capture, how a question flows |
| `industries.html` | Industries overview with a card for each sector (detailed pages coming soon) |
| `who-its-for.html` | Before and after for each role, industries we serve |
| `privacy.html` | Privacy and trust promises, FAQ |

Shared files live in `assets/`: `styles.css` (brand colours and layout), `site.js`
(mobile menu, scroll effects) and `logo.svg`.

Features marked "Coming soon" on the site match the "Next" items in the pitch
deck. Keep them in sync when a feature ships.

## Local preview

Open `index.html` in a browser, or run:

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deployment

GitHub Pages is deployed by `.github/workflows/pages.yml` on every push to `main`.
