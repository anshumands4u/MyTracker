import { Ionicons } from "@expo/vector-icons";
import React from "react";

type RouteNames =
  | "index"
  | "preferences"
  | "(management)/exportRecords"
  | "(management)/backup"
  | "(management)/resetData"
  | "(applications)/rating"
  | "(applications)/feedback";

type SectionNames = "management" | "support";

export const getDrawerIcon = (
  routeName: string,
  isActive: boolean = false
): React.ReactNode => {
  const iconProps = {
    size: 20,
    color: "white", // ✅ always white
  };

  const iconMap: Record<RouteNames, string> = {
    index: "home-outline",
    preferences: "settings-outline",
    "(management)/exportRecords": "download-outline",
    "(management)/backup": "shield-checkmark-outline",
    "(management)/resetData": "trash-outline",
    "(applications)/rating": "heart-outline",
    "(applications)/feedback": "chatbubble-ellipses-outline",
  };

  const iconName = iconMap[routeName as RouteNames] || "folder-outline";
  return <Ionicons name={iconName as any} {...iconProps} />;
};

export const getSectionIcon = (sectionName: SectionNames): React.ReactNode => {
  const iconProps = { size: 16, color: "white" }; // ✅ always white

  const sectionIcons: Record<SectionNames, string> = {
    management: "settings-outline",
    support: "heart-outline",
  };

  const iconName = sectionIcons[sectionName] || "folder-outline";
  return <Ionicons name={iconName as any} {...iconProps} />;
};
