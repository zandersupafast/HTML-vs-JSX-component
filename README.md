# HTML vs JSX — Pricing card

A small teaching project so designers can compare **plain HTML** and **JSX** side by side. Same layout and styles; only the way the UI is written changes.

## How to run

No build step. Open the files in a browser:

- **HTML version:** open `index.html` (or run a simple local server if needed for CORS).
- **JSX version:** open `jsx-version.html`. It loads React and Babel from CDNs and runs in the browser.

## Teaching points

| HTML | JSX |
|------|-----|
| `class="card"` | `className="card"` (because `class` is reserved in JS) |
| Static markup only | Markup + JavaScript expressions in `{ }` |
| One-off structure | Reusable **components** (e.g. `<PricingCard />`) with **props** (e.g. `title`, `features`) |
| Copy-paste to add a card | Pass new data: `<PricingCard title="Pro" features={[...]} />` |

Same CSS (`styles.css`) is used for both versions so the visual result is identical.

## Files

- `index.html` — Pure HTML + CSS pricing cards (centered).
- `jsx-version.html` — Same UI built with a React component and JSX.
- `styles.css` — Shared styles for both versions.
