This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Workers

The site runs on Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare).

```bash
npm run preview   # build + run locally in the Workers runtime (http://localhost:8787)
npm run deploy    # build + deploy to Cloudflare
```

Secrets (set once): `npx wrangler secret put CRON_SECRET`, plus `GOOGLE_API_KEY`, `GITHUB_TOKEN`, `GITHUB_OWNER`.
For local preview, copy `.dev.vars.example` to `.dev.vars`.

The weekly blog generator runs via Cloudflare Cron Triggers (`wrangler.jsonc` → `triggers.crons`),
handled in `custom-worker.ts`.
