import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";
import {
  GlobeAltIcon,
  PlayCircleIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
} from "react-native-heroicons/outline";
import { Image } from "react-native";
import { Button } from "react-native";
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
  return (
    <SafeAreaView className="pt-5 bg-white">
      <Navbar />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 130 }}
        className="bg-gray-100"
      >
        <View className="bg-[#000022] pt-5 pb-2 pl-5">
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
        <View className="pt-5 pl-3 bg-gray-100 ">
          <View className="items-center">
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
                  <Button title="Buy Now!!" color="#99ccff" />
                </View>
                <Text className="pt-2 font-light text-xs">
                  Get a LifeTime Access
                </Text>
              </View>
            </View>
          </View>
          <View className="px-3 py-5">
            <Text className="font-bold pb-2 text-base">
              This Course includes:
            </Text>
            <View className="">
              <View className="flex-row items-center pb-1">
                <PlayCircleIcon size={22} color="black" />
                <Text> 50 hours on-demand video</Text>
              </View>
              <View className="flex-row items-center pb-1">
                <QuestionMarkCircleIcon size={18} color="black" />
                <Text> 15 Quizzes</Text>
              </View>
              <View className="flex-row items-center pb-1">
                <TrophyIcon size={18} color="black" />
                <Text> Certificate on Completion</Text>
              </View>
            </View>
          </View>

          <View className='pl-3'>
                <Text className='font-bold text-base'>Requirements</Text>
                <Text className='text-sm'>Completely beginner friendly</Text>
          
          </View>


          <View className='py-3 pl-3'>
                <Text className='font-bold text-base'>Course Content</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseScreen;
