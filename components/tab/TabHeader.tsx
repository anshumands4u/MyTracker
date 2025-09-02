import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TabHeaderProps {
  title: string;
  onMenuPress?: () => void;
}

const TabHeader: React.FC<TabHeaderProps> = ({ title, onMenuPress }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-bgColor1 px-4 flex-row items-center justify-between"
      style={{
        paddingTop: insets.top + 8,
        paddingBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
      }}
    >
      {/* Left side - Menu */}
      <Pressable
        onPress={onMenuPress}
        className="p-2 rounded-full active:bg-white/20"
      >
        {/* <Bars3Icon size={24} color={"white"} className="text-white" />
         */}
        <Ionicons name="menu" size={24} color="white" />
      </Pressable>

      {/* Center - Title */}
      <View className="flex-1 items-center">
        <Text className="text-white text-lg font-semibold">{title}</Text>
      </View>

      {/* Right side - search */}
      <Pressable className="p-2 rounded-full active:bg-white/20 relative">
        <Ionicons name="search" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default TabHeader;
