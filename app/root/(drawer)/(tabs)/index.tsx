import TabHeader from "@/components/tab/TabHeader";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

const index: React.FC = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View className="flex-1 bg-background-50">
      <TabHeader title="Records" onMenuPress={handleMenuPress} />
      <Text className="text-primary-500">Hello world</Text>
    </View>
  );
};

export default index;
