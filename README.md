# Apis mellifera: Astro + Sveltia CMS

A static Astro site about the western honey bee, edited with [Sveltia CMS](https://github.com/sveltia/sveltia-cms).

## Run it

```sh
npm install
npm run dev
```

- Site: http://localhost:4321
- CMS: http://localhost:4321/admin/

### Edit locally (no GitHub)
Open `/admin/` in Chrome or Edge, click **Work with Local Repository**, and pick this project folder. Edits are written straight to `src/content/`.

### Edit in production (GitHub backend)
1. Push the project to GitHub and set `repo:` in `public/admin/config.yml`.
2. Sign in at `/admin/` with a GitHub personal access token, or deploy the
   [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) (a small Cloudflare Worker)
   and set `base_url:` in `config.yml` for OAuth sign-in.
3. Each save commits to the repo, and Workers Builds rebuilds and redeploys the site.

## Deploy to Cloudflare Workers

```sh
npm run deploy
```
Or connect the repo in Workers Builds: build command `npm run build`, deploy command `npx wrangler deploy`.

## Structure

| Path | Purpose |
|---|---|
| `src/content/topics/*.md` | Topic pages (Markdown + frontmatter) |
| `src/content/settings/home.json` | Home page heading and intro |
| `src/content.config.ts` | Astro content schema |
| `public/admin/` | Sveltia CMS entry point and `config.yml` |
