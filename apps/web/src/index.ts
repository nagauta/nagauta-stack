import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import api from "./routes/api";
import pages from "./routes/index";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));
app.route("/", pages);
app.route("/api", api);

serve({ fetch: app.fetch, port: 3000 }, (info) => {
	console.log(`Server running at http://localhost:${info.port}`);
});

export default app;
