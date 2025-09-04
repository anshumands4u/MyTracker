import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Icons Table
export const icons = sqliteTable("icons", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(), // Icon name (e.g., "fitness")
  setName: text("set_name").notNull(), // Icon set (Ionicons, Feather, etc.)
  color: text("color").notNull(), // Hex color
  type: text("type").notNull(), // "good" or "bad"
});

// Categories Table
export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  iconId: integer("icon_id")
    .notNull()
    .references(() => icons.id), // FK → icons
});
