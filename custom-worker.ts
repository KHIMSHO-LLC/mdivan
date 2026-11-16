// Wraps the OpenNext worker so Cloudflare Cron Triggers can call the
// blog generator (replaces the "crons" block that used to live in vercel.json).
// @ts-ignore `.open-next/worker.js` is generated at build time
import { default as handler } from "./.open-next/worker.js";

type Env = { CRON_SECRET?: string } & Record<string, unknown>;

export default {
  fetch: handler.fetch,

  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    const request = new Request("https://mdivan.com/api/generate-blog", {
      headers: { authorization: `Bearer ${env.CRON_SECRET}` },
    });
    const response = await handler.fetch(request, env, ctx);
    console.log("generate-blog cron:", response.status, await response.text());
  },
};

// @ts-ignore `.open-next/worker.js` is generated at build time
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "./.open-next/worker.js";
