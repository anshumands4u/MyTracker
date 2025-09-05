import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { ScrollView, View } from "react-native";
import DrawerFooter from "./DrawerFooter";
import DrawerHeader from "./DrawerHeader";
import { getDrawerIcon } from "./drawerIcons";
import DrawerItem from "./DrawerItem";
import { categorizeRoutes, getRouteLabel } from "./drawerRoutes";
import SectionHeader from "./SectionHeader";

interface Route {
  key: string;
  name: string;
}

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { state, navigation, descriptors } = props;

  const { mainRoutes, managementRoutes, applicationRoutes } = categorizeRoutes(
    state.routes
  );

  const renderRouteSection = (
    routes: Route[],
    sectionName?: "management" | "support",
    sectionTitle?: string
  ): React.ReactNode => {
    if (routes.length === 0) return null;

    return (
      <View>
        {sectionName && sectionTitle && <SectionHeader title={sectionTitle} />}
        {routes.map((route) => {
          const isActive = state.index === state.routes.indexOf(route);
          //@ts-ignore
          const label = getRouteLabel(route, descriptors);

          return (
            <DrawerItem
              key={route.key}
              route={route}
              isActive={isActive}
              label={label}
              icon={getDrawerIcon(route.name, isActive)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-background-200">
      <DrawerHeader />

      <ScrollView className="flex-1 pt-4" showsVerticalScrollIndicator={false}>
        {/* Main Navigation */}
        {renderRouteSection(mainRoutes)}

        {/* Management Section */}
        {renderRouteSection(managementRoutes, "management", "Management")}

        {/* Applications Section */}
        {renderRouteSection(applicationRoutes, "support", "Support")}

        <DrawerFooter />
      </ScrollView>
    </View>
  );
};

export default CustomDrawerContent;
