import React from "react";
import { Pressable, Text, View } from "react-native";

interface DrawerItemProps {
  route: {
    key: string;
    name: string;
  };
  isActive: boolean;
  onPress: () => void;
  label: string;
  icon: React.ReactNode;
}

const DrawerItem: React.FC<DrawerItemProps> = ({
  route,
  isActive,
  onPress,
  label,
  icon,
}) => {
  return (
    <View className="mx-3 mb-1">
      <Pressable
        className={`flex-row items-center px-4 py-3 rounded-xl active:bg-blue-400 active:border-l-4 active:border-blue-500`}
        onPress={onPress}
      >
        <View className="mr-3">{icon}</View>
        <Text className={`flex-1 text-base font-medium text-white`}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default DrawerItem;
