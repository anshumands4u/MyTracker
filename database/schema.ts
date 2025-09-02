import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const icons = sqliteTable("icons", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  iconFamily: text("icon_family").notNull(), // e.g. Ionicons, FontAwesome5
  iconName: text("icon_name").notNull(), // e.g. "bicycle-outline"
  type: text("type").notNull(), // "good" | "bad"
});
