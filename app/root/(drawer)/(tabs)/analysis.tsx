import TabHeader from "@/components/tab/TabHeader";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

const AnalysisScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View className="flex-1 bg-background-50">
      <TabHeader title="Analysis" onMenuPress={handleMenuPress} />
    </View>
  );
};

export default AnalysisScreen;
