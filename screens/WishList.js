import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import { LinearGradient } from "expo-linear-gradient";
const DATA = [
  {
    id: "123",
    title: "Web Dev",
  },
  {
    id: "1234",
    title: "Marketing",
  },
  {
    id: "12343",
    title: "Design",
  },
  {
    id: "123431",
    title: "Lifestyle",
  },
  {
    id: "123432",
    title: "Photography",
  },
  {
    id: "122343",
    title: "Health",
  },
  {
    id: "123243",
    title: "IT & Software",
  },
];

const WishList = () => {
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#364649", "#708F96"]}
        className='flex-1'
      >
      
      <View className=' absolute top-40 -left-40 h-[70vw] w-[70vw] bg-[#708f9673] rounded-3xl  shadow-white shadow-inner origin-bottom rotate-45'></View>
      
      <View className=' absolute bottom-40 -right-40 h-[70vw] w-[70vw] bg-[#3646497c] rounded-3xl shadow-inner shadow-white origin-bottom rotate-45'></View>
        <ScrollView className=''>
          <View className="">
            <View className="bg-[#000022]">
              <Text className="pt-10 pl-5 pb-10 text-white font-bold text-xl">
                My WishList
              </Text>
            </View>

            <Text className="pt-3 pl-5 text-white">Save something for your wishlist</Text>
          </View>

          <View className="pl-5 pt-10">
            <Categories styleMe="column" />
          </View>
        </ScrollView>
        <View>
          <Footer />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WishList;
