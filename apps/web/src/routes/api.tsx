import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { z } from "zod/v4";
import { db } from "../db";
import { examples } from "../db/schema";
import { ExampleItem } from "../views/partials/example-item";

const app = new Hono();

const createExampleSchema = z.object({
	title: z.string().min(1),
});

app.get("/examples", async (c) => {
	const items = await db.select().from(examples);
	return c.html(
		<>
			{items.map((item) => (
				<ExampleItem key={item.id} id={item.id} title={item.title} />
			))}
		</>,
	);
});

app.post("/examples", async (c) => {
	const body = await c.req.parseBody();
	const parsed = createExampleSchema.safeParse(body);
	if (!parsed.success) {
		return c.text("Invalid input", 400);
	}
	const rows = await db
		.insert(examples)
		.values({ title: parsed.data.title })
		.returning();
	const item = rows[0];
	if (!item) {
		return c.text("Failed to create", 500);
	}
	return c.html(<ExampleItem id={item.id} title={item.title} />);
});

app.delete("/examples/:id", async (c) => {
	const id = c.req.param("id");
	await db.delete(examples).where(eq(examples.id, id));
	return c.body(null, 200);
});

export default app;
