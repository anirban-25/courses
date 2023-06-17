import { View, Text } from "react-native";
import React from "react";
import { ChevronDoubleRightIcon } from "react-native-heroicons/outline";

const Reviews = () => {
  return (
    <View className="mt-2">
      <View className="flex-row items-center">
        <Text className="flex-1 text-lg font-bold">Reviews </Text>
        <View className="mr-3">
          <ChevronDoubleRightIcon size={20} color="#000000" />
        </View>
      </View>
    </View>
  );
};

export default Reviews;
