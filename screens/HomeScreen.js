import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Navbar from "../components/Navbar";
import Provide from "../components/Provide";
import Trends from "../components/Trends";
import Reviews from "../components/Reviews";
import BestSellers from "../components/BestSellers";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white pt-5">
      <Navbar />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 130, paddingLeft: 10 }}
        className="bg-gray-100"
      >
        <View className="mr-2 my-2">
          <Text className="text-base font-bold">What We Provide</Text>
          <View className="bg-white h-32 relative">
            <Text className="absolute px-3 pt-1 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              molestiae cumque facilis voluptates, rem delectus rerum optio
              aspernatur labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit voluptatum nulla?
            </Text>
          </View>
        </View>

        <View className="mt-3">
          <Trends />
        </View>

        <View className="mt-3">
          <BestSellers />
        </View>


        <View className="mt-3">
          <Reviews />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
