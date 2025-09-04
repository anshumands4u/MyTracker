import { defaultIcons } from "@/constant";
import { db } from "./db";
import { categories, icons } from "./schema";

export async function seedData() {
  const existingIcons = db.select().from(icons).all();
  if (existingIcons.length === 0) {
    await db.insert(icons).values(defaultIcons);
    console.log("✅ Seeded default icons");

    // Auto-create default categories (same as icons)
    const insertedIcons = db.select().from(icons).all();
    const defaultCategories = insertedIcons.map((icon) => ({
      name: icon.name,
      iconId: icon.id!,
    }));

    await db.insert(categories).values(defaultCategories);
    console.log("✅ Seeded default categories");
  }
}
