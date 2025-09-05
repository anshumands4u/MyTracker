import { GetCategoriesByType, IconFamily } from "@/types";
import React from "react";
import { View } from "react-native";
import DynamicIcon from "../DynamicIcon";

const CategoryItem = ({ item }: { item: GetCategoriesByType }) => {
  return (
    <View className="my-2 mr-2 flex flex-row justify-between">
      <View className="flex flex-row gap-4">
        <DynamicIcon
          name={item.icon.name}
          color={item.icon.color}
          family={item.icon.setName as IconFamily}
        />
      </View>
    </View>
  );
};

export default CategoryItem;
