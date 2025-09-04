import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { icons } from "../db/schema";

export async function getAllIcons() {
  return db.select().from(icons).all();
}

export async function getIconsByType(type: "good" | "bad") {
  return db.select().from(icons).where(eq(icons.type, type));
}

export async function getIconById(id: number) {
  return db.select().from(icons).where(eq(icons.id, id)).get();
}
