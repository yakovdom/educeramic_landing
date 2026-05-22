# Dev and Prod Repositories

This site is a static GitHub Pages project. The intended setup is two repositories:

- Dev: `ooodhctvorec/educeramic_landing`
- Prod: `ooodhctvorec/educeramic.ru`

## Local Remotes

```bash
git remote -v
```

Expected remotes after setup:

```text
origin  https://github.com/ooodhctvorec/educeramic_landing.git
prod    https://github.com/ooodhctvorec/educeramic.ru.git
```

Use `origin` for everyday development. Use `prod` only when publishing an approved version.

## GitHub Pages

Development repo:

- Pages source: `main` branch, repository root
- Public URL: `https://ooodhctvorec.github.io/educeramic_landing/`
- Do not configure the custom domain here after production is split out.

Production repo:

- Pages source: `main` branch, repository root
- Custom domain: `educeramic.ru`
- Keep `CNAME` with exactly:

```text
educeramic.ru
```

## Publishing Flow

1. Work locally in this repo.
2. Check at `http://localhost:8000/`.
3. Commit and push to `origin/main`.
4. When ready for production, promote to `prod/main`.

The helper script below pushes the current `main` branch to the production remote:

```bash
./scripts/promote-to-prod.sh
```

Before the first promotion, create the production repository on GitHub as `ooodhctvorec/educeramic.ru`, then enable GitHub Pages from `main` / root and set the custom domain to `educeramic.ru`.
