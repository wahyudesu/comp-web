// path to a file with schema you want to reset

import { reset } from "drizzle-seed";
import * as schema from "./packages/db/src/schema/schema";

async function main() {
	const db = drizzle(process.env.DATABASE_URL!);
	await reset(db, schema);
}

main();
