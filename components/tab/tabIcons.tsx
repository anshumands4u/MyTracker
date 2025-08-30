import React from "react";
import {
  ChartBarIcon,
  DocumentTextIcon,
  TagIcon,
} from "react-native-heroicons/outline";
import {
  ChartBarIcon as ChartBarIconSolid,
  DocumentTextIcon as DocumentTextIconSolid,
  TagIcon as TagIconSolid,
} from "react-native-heroicons/solid";

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
      { outline: React.ComponentType<any>; solid: React.ComponentType<any> }
    > = {
      records: { outline: DocumentTextIcon, solid: DocumentTextIconSolid },
      analysis: { outline: ChartBarIcon, solid: ChartBarIconSolid },
      category: { outline: TagIcon, solid: TagIconSolid },
    };

    const icons = iconMap[routeName as TabNames];
    if (!icons) return <DocumentTextIcon size={size} color={color} />;

    const IconComponent = focused ? icons.solid : icons.outline;
    return <IconComponent size={size} color={color} />;
  };
};
