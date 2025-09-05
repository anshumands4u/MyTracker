import CategoryItem from "@/components/category/CategoryItem";
import TabHeader from "@/components/tab/TabHeader";
import { Divider } from "@/components/ui/divider";
import { getCategoriesByType } from "@/queries/CategoryQueries";
import { GetCategoriesByType } from "@/types";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const CategoryScreen: React.FC = () => {
  const navigation = useNavigation();
  const [goodHabitCategories, setGoodHabitCategories] =
    useState<GetCategoriesByType[]>();
  const [badHabitCategories, setBadHabitCategories] =
    useState<GetCategoriesByType[]>();
  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const renderItem = ({ item }: { item: GetCategoriesByType }) => (
    <View>
      <Text className="text-white">{item.name}</Text>
    </View>
  );
  useEffect(() => {
    const getCategories = async () => {
      const goodCategories = await getCategoriesByType("good");
      const badCategories = await getCategoriesByType("bad");
      setGoodHabitCategories(goodCategories);
      setBadHabitCategories(badCategories);
    };
    getCategories();
  }, []);
  return (
    <View className="flex-1 bg-background-50">
      <TabHeader title="Categories" onMenuPress={handleMenuPress} />
      <View className="ml-5 mt-5">
        <Text className="text-primary-500 font-semibold text-xl">
          Good Habit Categories
        </Text>
        <Divider className="bg-background-600 mt-1" />
        <FlatList
          data={goodHabitCategories}
          renderItem={({ item }: { item: GetCategoriesByType }) => (
            <CategoryItem item={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;
