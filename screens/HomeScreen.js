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
import { LinearGradient } from "expo-linear-gradient";
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
    <SafeAreaView className="bg-[#99bbff] flex-1 ">
      <Navbar />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#ACC0FE", "#BFFFC7"]}
      >
      <View className=' absolute top-40 -left-10 h-[40vh] w-[40vw] border-white border-2 bg-[#ACC0FE] shadow-violet-200 shadow-[2px_2px_10px_rgba(0,0,0,0.5)]  origin-bottom rotate-45'></View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 130, paddingLeft: 10 }}
          className="bg-black-100 relative"
        >
          <View className="mr-2 my-2 z-10">
            <Text className="text-base font-bold">What We Provide</Text>
            <View className="bg-white h-32 relative">
              <Text className="absolute px-3 pt-1 text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                molestiae cumque facilis voluptates, rem delectus rerum optio
                aspernatur labore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima velit voluptatum nulla?
              </Text>
            </View>
          </View>

          <View className="mt-3 z-10">
            <Trends />
          </View>

          <View className="absolute top-40 right-[-80]">
            <Text className="border-2 border-white w-[50vw] h-[50vh] origin-bottom rotate-45 bg-[#BFFFC7] -z-10"></Text>
          </View>

          <View className="">
            <BestSellers />
          </View>

          <View className="mt-3">
            <Categories styleMe="row" />
          </View>

          <View className="mt-3 mb-32">
            <Reviews />
          </View>
        </ScrollView>
      </LinearGradient>
      <View className="absolute bottom-0 w-[100%]">
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
