import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-background-200 border-t border-gray-200 flex-row"
      style={{
        paddingBottom: insets.bottom,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 items-center justify-center py-3"
            style={{ minHeight: 60 }}
          >
            <View className="items-center justify-center">
              {/* Active indicator */}
              {isFocused && (
                <View className="absolute -top-1 w-12 h-1 bg-white rounded-full" />
              )}

              {/* Icon container */}
              <View className={`p-2 rounded-full mb-1 `}>
                {options.tabBarIcon &&
                  options.tabBarIcon({
                    focused: isFocused,
                    color: "#ffffff",
                    size: 24,
                  })}
              </View>

              {/* Label */}
              <Text className={`text-xs font-medium text-primary-500`}>
                {typeof label === "string" ? label : route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
