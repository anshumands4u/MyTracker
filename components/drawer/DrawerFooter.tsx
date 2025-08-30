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
      <View className="mt-8 mx-3 p-4 bg-gray-50 rounded-xl">
        <Text className="text-xs text-gray-500 text-center">
          {appName} v{version}
        </Text>
        <Text className="text-xs text-gray-400 text-center mt-1">
          Made with ❤️ for tracking
        </Text>
      </View>
      <View className="h-6" />
    </>
  );
};

export default DrawerFooter;
