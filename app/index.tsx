import { seedCategories } from "@/database/seeder/iconsSeeder";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function AppEntry() {
  const router = useRouter();

  useEffect(() => {
    seedCategories();
    const timeout = setTimeout(() => {
      router.replace("/root/(drawer)/(tabs)");
    }, 0); // Delay to ensure layout has mounted

    return () => clearTimeout(timeout);
  }, []);

  return <View />;
}
