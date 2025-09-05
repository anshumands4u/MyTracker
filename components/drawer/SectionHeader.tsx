import React from "react";
import { Text, View } from "react-native";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <View className="mx-3 mt-6 mb-3 flex-row items-center">
      {/* <View className="mr-2">{icon}</View> */}
      <Text className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
        {title}
      </Text>
      <View className="flex-1 h-px bg-gray-200 ml-3" />
    </View>
  );
};

export default SectionHeader;
