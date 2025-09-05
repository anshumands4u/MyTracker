import { IconFamily } from "@/types";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { ColorValue } from "react-native";

// Define allowed icon families as a type

// Map icon family names to their respective components
const IconSets = {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
};

// Define the props type for the DynamicIcon component
interface DynamicIconProps {
  name: string;
  size?: number;
  color?: ColorValue;
  family?: IconFamily;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  size = 24,
  color = "black",
  family = "Ionicons",
}) => {
  // Get the icon component based on family prop
  const IconComponent = IconSets[family];

  if (!IconComponent) {
    return null; // or return a fallback icon/component if you want
  }

  //@ts-ignore
  return <IconComponent name={name} size={size} color={color} />;
};

export default DynamicIcon;
