import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";
import {
  GlobeAltIcon,
  PlayCircleIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
} from "react-native-heroicons/outline";
import { Image } from "react-native";
import { Button } from "react-native";
import { useCartContext } from "../context/cart_context";
const CourseScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      category,
      title,
      rating,
      language,
      price,
      teacher,
      description,
    },
  } = useRoute();
  // const {addToCart}= useCartContext();
  const navigation = useNavigation();
  return (
    <SafeAreaView className=" bg-white">
      <Navbar />
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        <View className="bg-[#65799B] pt-5 pb-2 pl-5">
          <View className=" pt-5 ">
            <Text className="text-[#99ccff] pb-5">{category}</Text>
            <Text className="text-base font-bold text-white">{title}</Text>
            <Text className="text-sm font-semibold text-[#ccdff2]">
              {description}
            </Text>
            <View className="pt-5 flex-row items-center relative">
              <Text className="text-white pr-1">{rating}</Text>
              <StarIcon size={15} color="lightblue" />
              <Text className="text-white pr-1 pl-5">{language}</Text>
              <GlobeAltIcon size={15} color="lightblue" />
            </View>
            <View className="flex-row pt-3">
              <Text className="text-white text-xs">Created by</Text>
              <Text className="text-blue-100 text-xs"> {teacher}</Text>
            </View>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#65799B", "#b56ebc"]}
        >
          <View className="pt-5 pl-3  ">
            <View className="items-center shadow-[#65799B] shadow-[2px_2px_10px_rgba(0,0,0,0.5)]">
              <View className="bg-white w-56 rounded">
                <Image
                  source={{
                    uri: imgUrl,
                  }}
                  className="h-36 w-56 rounded"
                />
                <View className="pl-6 pb-2">
                  <Text className="pt-2 font-bold">{price} ETH only</Text>
                  <View className="w-44 pt-2 ">
                    <Button 
                      title="Buy Now!!"
                      color="#b56ebc"
                      onPress={() => {
                        navigation.navigate("CourseBoughtScreen", {
                          id,
                          imgUrl,
                          category,
                          title,
                          rating,
                          language,
                          price,
                          teacher,
                          description,
                        });
                      }}
                    />
                  </View>
                  <Text className="pt-2 font-light text-xs">
                    Get a LifeTime Access
                  </Text>
                </View>
              </View>
            </View>
            <View className="w-44 mt-5 ml-5">
              <Button
                title="Add to WishList"
                color="#000100"
                onPress={() =>
                  addToCart(
                    id,
                    imgUrl,
                    category,
                    title,
                    rating,
                    language,
                    price,
                    teacher,
                    description
                  )
                }
              />
            </View>
            <View className="px-3 py-5 relative">
              <Text className="font-bold pb-2 text-base z-10 text-white">
                This Course includes:
              </Text>
              
              <View className="border-2 w-[50vw] h-[50vh] -z-10 absolute origin-bottom rotate-45 -top-[530px] -left-44 bg-[#6145c421] border-violet-100"/>
              <View className="relative">
                <View className="flex-row items-center pb-1">
                  <PlayCircleIcon size={22} color="white" />
                  <Text className=" text-white"> 50 hours on-demand video</Text>
                </View>
                <View className="flex-row items-center pb-1">
                  <QuestionMarkCircleIcon size={18} color="white" />
                  <Text className=" text-white"> 15 Quizzes</Text>
                </View>
                <View className="border-2 w-[50vw] h-[50vh] -z-10 absolute origin-bottom rotate-45 -top-12 -right-12 bg-[#54046c4f] border-violet-100"/>
                <View className="flex-row items-center pb-1">
                  <TrophyIcon size={18} color="white" />
                  <Text className="text-sm text-white"> Certificate on Completion</Text>
                </View>
              </View>
            </View>

            <View className="pl-3">
              <Text className="font-bold text-base text-white">Requirements</Text>
              <Text className="text-sm text-white">Completely beginner friendly</Text>
            </View>

            <View className="py-3 pl-3">
              <Text className="font-bold text-base text-white">Course Content</Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseScreen;
