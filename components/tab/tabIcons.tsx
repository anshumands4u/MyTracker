import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";

type TabNames = "records" | "analysis" | "category";

interface TabIconProps {
  focused: boolean;
  color: string;
  size: number;
}

export const getTabIcon = (routeName: string) => {
  return ({ focused, color, size }: TabIconProps): React.ReactNode => {
    const iconMap: Record<
      TabNames,
      { outline: string; solid?: string; family: "Ionicons" | "FontAwesome5" }
    > = {
      records: {
        outline: "document-text-outline",
        solid: "document-text",
        family: "Ionicons",
      },
      analysis: {
        outline: "bar-chart-outline",
        solid: "bar-chart",
        family: "Ionicons",
      },
      category: {
        outline: "tag",
        solid: "tags",
        family: "FontAwesome5",
      },
    };

    const icons = iconMap[routeName as TabNames];
    if (!icons) {
      return (
        <Ionicons name="document-text-outline" size={size} color={color} />
      );
    }

    const iconName = focused && icons.solid ? icons.solid : icons.outline;

    switch (icons.family) {
      case "FontAwesome5":
        return (
          <FontAwesome5 name={iconName as any} size={size} color={color} />
        );
      case "Ionicons":
      default:
        return <Ionicons name={iconName as any} size={size} color={color} />;
    }
  };
};
