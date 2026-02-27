Deployment notes
----------------

This project is configured to be published to GitHub Pages at:

  https://STACTECH-inc.github.io/STAC-WEB/

What I changed to enable this:

- `vite.config.js`: set `base` to `/STAC-WEB/` so built asset paths resolve correctly.
- `package.json`: added `predeploy` and `deploy` scripts that use `gh-pages` to publish `dist/` locally.
- Added a GitHub Actions workflow in `.github/workflows/deploy.yml` which builds on pushes to `main` and deploys `dist/` to the `gh-pages` branch.

How to publish locally:

1. Install new dev dependency:

```bash
npm install
```

2. Build and publish with `gh-pages` (this will push to the `gh-pages` branch):

```bash
npm run deploy
```

How CI publish works:

- When you push to the `main` branch, the Actions workflow will run, build the site, and push the `dist/` folder to the `gh-pages` branch. GitHub Pages can be configured to serve from the `gh-pages` branch (usually at repository settings → Pages).

Important:
- Ensure the GitHub repository name is exactly `STAC-WEB` (case-sensitive path in `vite.config.js`), and the GitHub org/user is `STACTECH-inc`. If the repo name differs, update `base` in `vite.config.js` accordingly.
- You may need to enable Pages in repository settings and choose `gh-pages` branch as the source if GitHub doesn't auto-select it.
