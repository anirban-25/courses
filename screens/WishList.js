import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";

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
      <ScrollView
        contentContainerStyle={{ paddingBottom: 130 }}
        className="bg-gray-100"
      >
        <View className="">
          <View className="bg-[#000022]">
            <Text className="pt-10 pl-5 pb-10 text-white font-bold text-xl">
              My WishList
            </Text>
          </View>

          <Text>Save something for your wishlist</Text>
        </View>

        <View>
          <Categories
          styleMe="column"
          />
        </View>
      </ScrollView>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default WishList;
