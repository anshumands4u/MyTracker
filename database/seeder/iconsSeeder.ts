import { count } from "drizzle-orm";
import { db } from "../db";
import { icons } from "../schema";

const goodHabits = [
  { name: "Exercise", iconFamily: "Ionicons", iconName: "bicycle-outline" },
  {
    name: "Meditation",
    iconFamily: "MaterialIcons",
    iconName: "self-improvement",
  },
  { name: "Reading", iconFamily: "Ionicons", iconName: "book-outline" },
  {
    name: "Healthy Food",
    iconFamily: "Ionicons",
    iconName: "nutrition-outline",
  },
  { name: "Walking", iconFamily: "FontAwesome5", iconName: "walking" },
  { name: "Sleeping Early", iconFamily: "Ionicons", iconName: "bed-outline" },
  { name: "Drinking Water", iconFamily: "Ionicons", iconName: "water-outline" },
  { name: "Journaling", iconFamily: "Ionicons", iconName: "create-outline" },
  { name: "Learning", iconFamily: "Ionicons", iconName: "school-outline" },
  { name: "Cleaning", iconFamily: "Ionicons", iconName: "broom-outline" },
  { name: "Work/Study", iconFamily: "Ionicons", iconName: "briefcase-outline" },
  { name: "Cooking", iconFamily: "Ionicons", iconName: "restaurant-outline" },
  {
    name: "Stretching",
    iconFamily: "MaterialCommunityIcons",
    iconName: "yoga",
  },
  {
    name: "Spending Time with Family",
    iconFamily: "Ionicons",
    iconName: "people-outline",
  },
  { name: "Gratitude", iconFamily: "Ionicons", iconName: "happy-outline" },
];

const badHabits = [
  { name: "Smoking", iconFamily: "FontAwesome5", iconName: "smoking" },
  { name: "Alcohol", iconFamily: "FontAwesome5", iconName: "wine-bottle" },
  { name: "Overeating", iconFamily: "Ionicons", iconName: "fast-food-outline" },
  { name: "Procrastination", iconFamily: "Ionicons", iconName: "time-outline" },
  { name: "Junk Food", iconFamily: "Ionicons", iconName: "pizza-outline" },
  { name: "Oversleeping", iconFamily: "Ionicons", iconName: "bed-outline" },
  {
    name: "Video Games",
    iconFamily: "Ionicons",
    iconName: "game-controller-outline",
  },
  { name: "Too Much TV", iconFamily: "Ionicons", iconName: "tv-outline" },
  {
    name: "Nail Biting",
    iconFamily: "Ionicons",
    iconName: "hand-left-outline",
  },
  {
    name: "Negative Thinking",
    iconFamily: "Ionicons",
    iconName: "sad-outline",
  },
  {
    name: "Skipping Exercise",
    iconFamily: "Ionicons",
    iconName: "close-circle-outline",
  },
  { name: "Late Night", iconFamily: "Ionicons", iconName: "moon-outline" },
  {
    name: "Social Media Addiction",
    iconFamily: "Ionicons",
    iconName: "logo-instagram",
  },
  { name: "Gambling", iconFamily: "FontAwesome5", iconName: "dice" },
  { name: "Laziness", iconFamily: "Ionicons", iconName: "bed-outline" },
];

export async function seedCategories() {
  // 1. Check if categories already exist
  const existing = await db.select({ count: count() }).from(icons);

  if (existing[0]?.count > 0) {
    console.log("Categories already seeded, skipping...");
    return;
  }

  // 2. Insert Good Habits
  for (const habit of goodHabits) {
    await db.insert(icons).values({
      name: habit.name,
      iconFamily: habit.iconFamily,
      iconName: habit.iconName,
      type: "good",
    });
  }

  // 3. Insert Bad Habits
  for (const habit of badHabits) {
    await db.insert(icons).values({
      name: habit.name,
      iconFamily: habit.iconFamily,
      iconName: habit.iconName,
      type: "bad",
    });
  }

  console.log("Categories seeded successfully!");
}
