import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { categories, icons } from "../db/schema";

// 🔹 Get all categories
export async function getAllCategories() {
  return db.select().from(categories).all();
}

// 🔹 Get category by ID
export async function getCategoryById(id: number) {
  return db.select().from(categories).where(eq(categories.id, id)).get();
}

// 🔹 Get category by type
export async function getCategoriesByType(type: "good" | "bad") {
  return db
    .select({
      id: categories.id,
      name: categories.name,
      iconId: categories.iconId,
      icon: {
        id: icons.id,
        name: icons.name,
        setName: icons.setName,
        color: icons.color,
        type: icons.type,
      },
    })
    .from(categories)
    .innerJoin(icons, eq(categories.iconId, icons.id))
    .where(eq(icons.type, type))
    .all();
}

// 🔹 Create new category
export async function createCategory(name: string, iconId: number) {
  await db.insert(categories).values({ name, iconId });
  return { success: true };
}

// 🔹 Update category
export async function updateCategory(id: number, name: string, iconId: number) {
  await db
    .update(categories)
    .set({ name, iconId })
    .where(eq(categories.id, id));
  return { success: true };
}

// 🔹 Delete category
export async function deleteCategory(id: number) {
  await db.delete(categories).where(eq(categories.id, id));
  return { success: true };
}
