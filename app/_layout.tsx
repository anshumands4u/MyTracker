import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { db } from "@/db/db";
import migrations from "@/drizzle/migrations";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "../global.css";

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  useDrizzleStudio(db.$client);

  if (error) {
    console.log("Migration error ", error);
  }

  if (success) {
    console.log("Migration done");
  }
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <GestureHandlerRootView className="flex-1">
      <GluestackUIProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="root" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
