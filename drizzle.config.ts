import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "expo",
  dbCredentials: {
    url: "./drizzle/dev.db", // This file will be created/updated
  },
} satisfies Config;
