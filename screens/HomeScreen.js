import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Navbar from "../components/Navbar";
import Provide from "../components/Provide";
import Trends from "../components/Trends";
import Reviews from "../components/Reviews";
import BestSellers from "../components/BestSellers";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { useRoute } from "@react-navigation/native";

const HomeScreen = () => {
  // const {
  //   params: { email, titleName, lang, price, desc },
  // } = useRoute();

  // useEffect(() => {
  //   console.log(
  //     `the values are : ${email}, ${titleName}, ${lang}, ${price}, ${desc}`
  //   );
  // }, [email, titleName, lang, price, desc]);

  return (
    <SafeAreaView className="bg-whitez pt-5 flex-1">
      <Navbar />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 130, paddingLeft: 10 }}
        className="bg-black-100"
      >
        <View className="mr-2 my-2">
          <Text className="text-base font-bold">What We Provide</Text>
          <View className="bg-white h-32 relative">
            <Text className="absolute px-3 pt-1 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              molestiae cumque facilis voluptates, rem delectus rerum optio
              aspernatur labore. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Minima velit voluptatum nulla?
            </Text>
          </View>
        </View>

        <View className="mt-3">
          <Trends />
        </View>

        <View className="">
          <BestSellers />
        </View>

        <View className="mt-3">
          <Categories styleMe="row" />
        </View>

        <View className="mt-3">
          <Reviews />
        </View>
      </ScrollView>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
