import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { db } from "./db";

const app = new Hono();

// Important: Allow your Vite frontend (usually port 5173) to talk to this API
app.use("/*", cors());

// GET all posts
app.get("/api/posts", async (c) => {
  const allPosts = await db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  });
  return c.json(allPosts);
});

console.log("🚀 Server is running on http://localhost:3000");

serve({
  fetch: app.fetch,
  port: 3000,
});
