import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { env } from "hono/adapter";

const app = new Hono();
app.use("/api/*", cors());
app.use(logger());
app.post("/api/greet", async (c) => {
  const { APP_KEY } = env<{ APP_KEY: string }>(c);
  const body = await c.req.json();
  const now = new Date();

  return c.json({
    message: `Hello, ${
      body.name
    } at ${now.toLocaleString()} your APP_KEY is: ${APP_KEY}`,
  });
});
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = 3333;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
