import TabHeader from "@/components/tab/TabHeader";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CogIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  HomeIcon,
  PlusIcon,
} from "react-native-heroicons/outline";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  count: number;
  bgColor: string;
}

const CategoryScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const categories: Category[] = [
    {
      id: "1",
      name: "Work",
      icon: <BriefcaseIcon size={24} className="text-blue-600" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      count: 24,
    },
    {
      id: "2",
      name: "Personal",
      icon: <HeartIcon size={24} className="text-pink-600" />,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      count: 18,
    },
    {
      id: "3",
      name: "Learning",
      icon: <AcademicCapIcon size={24} className="text-purple-600" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      count: 12,
    },
    {
      id: "4",
      name: "Home",
      icon: <HomeIcon size={24} className="text-green-600" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      count: 15,
    },
    {
      id: "5",
      name: "Health",
      icon: <HeartIcon size={24} className="text-red-600" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      count: 9,
    },
    {
      id: "6",
      name: "Other",
      icon: <CogIcon size={24} className="text-gray-600" />,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      count: 6,
    },
  ];

  const renderCategoryCard = (category: Category) => (
    <Pressable
      key={category.id}
      className="bg-white rounded-xl p-4 mb-3 flex-row items-center justify-between active:bg-gray-50"
    >
      <View className="flex-row items-center flex-1">
        <View className={`p-3 rounded-full mr-4 ${category.bgColor}`}>
          {category.icon}
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">
            {category.name}
          </Text>
          <Text className="text-sm text-gray-500">
            {category.count} records
          </Text>
        </View>
      </View>

      <View className="flex-row items-center">
        <View className={`px-3 py-1 rounded-full mr-3 ${category.bgColor}`}>
          <Text className={`text-sm font-medium ${category.color}`}>
            {category.count}
          </Text>
        </View>
        <Pressable className="p-2">
          <EllipsisVerticalIcon size={20} className="text-gray-400" />
        </Pressable>
      </View>
    </Pressable>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <TabHeader title="Categories" onMenuPress={handleMenuPress} />

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Add New Category */}
        <Pressable className="bg-blue-500 rounded-xl p-4 mb-6 flex-row items-center justify-center">
          <PlusIcon size={20} className="text-white mr-2" />
          <Text className="text-white font-semibold text-lg">
            Add New Category
          </Text>
        </Pressable>

        {/* Quick Stats */}
        <View className="flex-row gap-3 mb-6">
          <View className="flex-1 bg-white rounded-xl p-4">
            <Text className="text-2xl font-bold text-gray-800">6</Text>
            <Text className="text-sm text-gray-600 mt-1">Total Categories</Text>
          </View>
          <View className="flex-1 bg-white rounded-xl p-4">
            <Text className="text-2xl font-bold text-gray-800">84</Text>
            <Text className="text-sm text-gray-600 mt-1">Total Records</Text>
          </View>
          <View className="flex-1 bg-white rounded-xl p-4">
            <Text className="text-2xl font-bold text-blue-600">Work</Text>
            <Text className="text-sm text-gray-600 mt-1">Most Used</Text>
          </View>
        </View>

        {/* Categories List */}
        <View className="mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            All Categories
          </Text>
          {categories.map(renderCategoryCard)}
        </View>

        {/* Category Performance */}
        <View className="bg-white rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Category Performance
          </Text>

          {categories.slice(0, 3).map((category, index) => (
            <View
              key={category.id}
              className="flex-row items-center mb-3 last:mb-0"
            >
              <View className="flex-row items-center flex-1">
                <Text
                  className={`text-lg font-bold mr-3 ${
                    index === 0
                      ? "text-yellow-500"
                      : index === 1
                      ? "text-gray-400"
                      : "text-orange-500"
                  }`}
                >
                  #{index + 1}
                </Text>
                <View className={`p-2 rounded-full mr-3 ${category.bgColor}`}>
                  {category.icon}
                </View>
                <Text className="font-medium text-gray-800">
                  {category.name}
                </Text>
              </View>
              <Text className="text-gray-600 font-semibold">
                {category.count}
              </Text>
            </View>
          ))}
        </View>

        {/* Recent Activity */}
        <View className="bg-white rounded-xl p-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </Text>

          {[
            {
              category: "Work",
              action: "Added new record",
              time: "2 minutes ago",
              color: "text-blue-600",
            },
            {
              category: "Personal",
              action: "Updated category",
              time: "1 hour ago",
              color: "text-pink-600",
            },
            {
              category: "Learning",
              action: "Added new record",
              time: "3 hours ago",
              color: "text-purple-600",
            },
          ].map((activity, index) => (
            <View
              key={index}
              className="flex-row items-center py-3 border-b border-gray-100 last:border-b-0"
            >
              <View className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              <View className="flex-1">
                <Text className="font-medium text-gray-800">
                  <Text className={activity.color}>{activity.category}</Text> •{" "}
                  {activity.action}
                </Text>
                <Text className="text-sm text-gray-500 mt-1">
                  {activity.time}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
