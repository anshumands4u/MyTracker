import CustomTabBar from "@/components/tab/CustomTabBar";
import { getTabIcon } from "@/components/tab/tabIcons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout: React.FC = () => {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e5e7eb",
          height: 80,
          paddingTop: 8,
          paddingBottom: 24,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Records",
          tabBarLabel: "Records",
          tabBarIcon: getTabIcon("records"),
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "Analysis",
          tabBarLabel: "Analysis",
          tabBarIcon: getTabIcon("analysis"),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
          tabBarLabel: "Category",
          tabBarIcon: getTabIcon("category"),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
