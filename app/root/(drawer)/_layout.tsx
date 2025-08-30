import CustomDrawerContent from "@/components/drawer/CustomDrawerContent";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Pressable } from "react-native";

const BackButton = () => {
  return (
    <Pressable
      onPress={() => router.navigate("/root/(drawer)/(tabs)")}
      className="ml-4"
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </Pressable>
  );
};

const Layout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 280,
        },
        headerStyle: {
          backgroundColor: "#404040",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: "#171717",
        drawerInactiveTintColor: "#6b7280",
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "My Tracker",
          headerTitle: "MyTracker",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="preferences"
        options={{
          title: "Preferences",
          headerLeft: BackButton,
        }}
      />

      <Drawer.Screen
        name="(management)/exportRecords"
        options={{
          title: "Export Records",
          headerLeft: BackButton,
        }}
      />

      <Drawer.Screen
        name="(management)/backup"
        options={{
          title: "Backup & Restore",
          headerLeft: BackButton,
        }}
      />

      <Drawer.Screen
        name="(management)/resetData"
        options={{
          title: "Delete & Reset",
          headerLeft: BackButton,
        }}
      />

      <Drawer.Screen
        name="(applications)/rating"
        options={{
          title: "Like MyTracker",
          headerLeft: BackButton,
        }}
      />
      <Drawer.Screen
        name="(applications)/feedback"
        options={{
          title: "Feedback",
          headerLeft: BackButton,
        }}
      />
    </Drawer>
  );
};

export default Layout;
