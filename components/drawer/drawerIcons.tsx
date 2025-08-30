import React from "react";
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  FolderIcon,
  HeartIcon,
  HomeIcon,
  ShieldCheckIcon,
  TrashIcon,
} from "react-native-heroicons/outline";

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
    className: isActive ? "text-blue-600" : "text-gray-600",
    color: "white",
  };

  const iconMap: Record<RouteNames, React.ComponentType<any>> = {
    index: HomeIcon,
    preferences: CogIcon,
    "(management)/exportRecords": ArrowDownTrayIcon,
    "(management)/backup": ShieldCheckIcon,
    "(management)/resetData": TrashIcon,
    "(applications)/rating": HeartIcon,
    "(applications)/feedback": ChatBubbleLeftRightIcon,
  };

  const IconComponent = iconMap[routeName as RouteNames] || FolderIcon;
  return <IconComponent {...iconProps} />;
};

export const getSectionIcon = (sectionName: SectionNames): React.ReactNode => {
  const iconProps = { size: 16, className: "text-gray-500", color: "white" };

  const sectionIcons: Record<SectionNames, React.ComponentType<any>> = {
    management: CogIcon,
    support: HeartIcon,
  };

  const IconComponent = sectionIcons[sectionName] || FolderIcon;
  return <IconComponent {...iconProps} />;
};
