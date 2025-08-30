import TabHeader from "@/components/tab/TabHeader";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { MagnifyingGlassIcon, PlusIcon } from "react-native-heroicons/outline";

const index: React.FC = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View className="flex-1 bg-appColor2">
      <TabHeader title="Records" onMenuPress={handleMenuPress} />

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Quick Actions */}
        <View className="flex-row gap-3 mb-6">
          <Pressable className="flex-1 bg-blue-500 p-4 rounded-xl flex-row items-center justify-center">
            <PlusIcon size={20} className="text-white mr-2" />
            <Text className="text-white font-semibold">Add Record</Text>
          </Pressable>
          <Pressable className="bg-white p-4 rounded-xl border border-gray-200">
            <MagnifyingGlassIcon size={20} className="text-gray-600" />
          </Pressable>
        </View>

        {/* Recent Records */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            Recent Records
          </Text>

          {/* Sample record items */}
          {[1, 2, 3, 4].map((item) => (
            <View
              key={item}
              className="flex-row items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
            >
              <View className="flex-1">
                <Text className="font-medium text-gray-800">Record {item}</Text>
                <Text className="text-sm text-gray-500 mt-1">
                  Today, 2:30 PM
                </Text>
              </View>
              <View className="bg-green-100 px-3 py-1 rounded-full">
                <Text className="text-green-700 text-xs font-medium">
                  Completed
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Statistics Card */}
        <View className="bg-white rounded-xl p-4">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            Today's Summary
          </Text>
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-600">12</Text>
              <Text className="text-sm text-gray-500">Total</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-600">8</Text>
              <Text className="text-sm text-gray-500">Completed</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-orange-600">4</Text>
              <Text className="text-sm text-gray-500">Pending</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
