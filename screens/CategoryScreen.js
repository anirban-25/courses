import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Trends from "../components/Trends";
import Categories from "../components/Categories";
import { LinearGradient } from "expo-linear-gradient";

const CategoryScreen = () => {
  const {
    params: { id, title },
  } = useRoute();
  return (
    <View className="flex-1">
      <ScrollView className="bg-gray-100">
        <View className="bg-[#000022] pt-[65px] pb-2 pl-4 z-20">
          <View className=" ">
            <Text className="text-lg font-bold text-white ">
              {title} Courses
            </Text>
            <View className="pt-5 flex-row items-center relative"></View>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#CCFBFF", "#EF96C5"]} 
          className='h-[100vh] relative flex-1'
        >
        
        <View className="border-2 w-[50vw] h-[30vh] z-10 absolute top-0 -left-20 origin-bottom rotate-45  bg-[#54046c27] border-violet-100"/>
          <View className="pl-3 pt-2">
            <Text className="text-gray-600">
              Courses to get you started.....
            </Text>
            <View className="mt-3">
              <Trends />
            </View>
          </View>

          <View className="border-2 w-[50vw] h-[30vh] z-10 absolute bottom-20 -right-20 origin-bottom rotate-45  bg-[#7ecbef2d] border-violet-100"/>
          <View className="pl-3 pt-5 pb-2">
            <Text className="text-gray-600 text-base">
              Browse other Categories...
            </Text>
            <Categories styleMe="column" />
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
