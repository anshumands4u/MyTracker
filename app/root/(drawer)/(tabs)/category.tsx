import TabHeader from "@/components/tab/TabHeader";
import { Divider } from "@/components/ui/divider";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

const CategoryScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View className="flex-1 bg-background-50">
      <TabHeader title="Categories" onMenuPress={handleMenuPress} />
      <View className="ml-5 mt-5">
        <Text className="text-primary-500 font-semibold text-xl">
          Good Habit Categories
        </Text>
        <Divider />
      </View>
    </View>
  );
};

export default CategoryScreen;
