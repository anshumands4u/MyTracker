import React from "react";
import { Text, View } from "react-native";

const DrawerHeader: React.FC = () => {
  return (
    <View className="px-6 pt-12 pb-6">
      <View className="flex-row items-center">
        <View>
          <Text className="text-primary-500 text-xl font-bold">MyTracker</Text>
          {/* <Text className="text-blue-100 text-sm">Track your progress</Text> */}
        </View>
      </View>
    </View>
  );
};

export default DrawerHeader;
