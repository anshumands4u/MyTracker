import React from "react";
import { Text, View } from "react-native";

interface DrawerFooterProps {
  version?: string;
  appName?: string;
}

const DrawerFooter: React.FC<DrawerFooterProps> = ({
  version = "1.0.0",
  appName = "MyTracker",
}) => {
  return (
    <>
      <View className="mt-8 mx-3 p-4 bg-blue-500 rounded-xl">
        <Text className="text-xs text-white text-center">
          {appName} v{version}
        </Text>
        <Text className="text-xs text-white text-center mt-1">
          Track Your Life ❤️
        </Text>
      </View>
      <View className="h-6" />
    </>
  );
};

export default DrawerFooter;
