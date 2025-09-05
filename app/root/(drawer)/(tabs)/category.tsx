import TabHeader from "@/components/tab/TabHeader";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

const CategoryScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View className="flex-1 bg-background-50">
      <TabHeader title="Categories" onMenuPress={handleMenuPress} />
    </View>
  );
};

export default CategoryScreen;
