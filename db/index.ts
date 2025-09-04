import { seedData } from "./seed";

export async function initDatabase() {
  try {
    // Then seed data

    await seedData();
  } catch (error) {
    console.error("DB Init Error:", error);
  }
}
