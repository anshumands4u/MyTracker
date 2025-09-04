// db/db.ts
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as SQLite from "expo-sqlite";
import * as schema from "./schema"; // your tables

export const sqlite = SQLite.openDatabaseSync("lifeTracker");

export const db = drizzle(sqlite, { schema });
