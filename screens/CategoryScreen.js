import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Trends from "../components/Trends";
import Categories from "../components/Categories";

const CategoryScreen = () => {
  const {
    params: { id, title },
  } = useRoute();
  return (
    <View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 130 }}
        className="bg-gray-100"
      >
        <View className="bg-[#000022] pt-5 pb-2 pl-4">
          <View className=" ">
            <Text className="text-lg font-bold text-white ">
              {title} Courses
            </Text>
            <View className="pt-5 flex-row items-center relative"></View>
          </View>
        </View>

        <View className="pl-3 pt-2">
          <Text className="text-gray-600">Courses to get you started.....</Text>
          <View className="mt-3">
            <Trends />
          </View>
        </View>

        <View className='pl-3 pt-5 pb-2'>
        <Text className='text-gray-600 text-base'>Browse other Categories...</Text>
        <Categories styleMe="column"/>
        </View>

        

      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
