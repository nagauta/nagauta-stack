import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { examples } from "./schema";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
	throw new Error("DATABASE_URL is not set");
}

const client = postgres(databaseUrl);
const db = drizzle(client);

async function seed() {
	console.log("Seeding...");

	await db
		.insert(examples)
		.values([
			{ title: "Example 1" },
			{ title: "Example 2" },
			{ title: "Example 3" },
		]);

	console.log("Seeding done.");
}

seed()
	.catch(console.error)
	.finally(() => client.end());
