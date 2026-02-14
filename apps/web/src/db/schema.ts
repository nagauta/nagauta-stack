import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const examples = pgTable("examples", {
	id: uuid("id").defaultRandom().primaryKey(),
	title: text("title").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});
