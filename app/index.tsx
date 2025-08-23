import { Button, ButtonText } from "@/components/ui/button";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <Text className="text-red-500 text-5xl">Hello world</Text>
      <Button size="xl" variant="solid" action="negative">
      <ButtonText>Hello World!</ButtonText>
    </Button>
    </SafeAreaView>
  );
};

export default index;
