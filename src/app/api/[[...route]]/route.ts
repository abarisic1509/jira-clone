import { Hono } from "hono";
import { handle } from "hono/netlify";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
	return c.json({ hello: "world" });
});

export const GET = handle(app);
