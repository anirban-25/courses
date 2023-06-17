import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { Image } from "react-native";
import { StarIcon, ChevronDoubleRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
const BestSellerCards = ({
  id,
  imgUrl,
  category,
  title,
  rating,
  language,
  price,
  teacher,
  description ,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3"
      onPress={() => {
        navigation.navigate('CourseScreen', {
          id,
          imgUrl,
          category,
          title,
          rating,
          language,
          price,
          teacher,
          description ,
        });
      }}
    >
      <View>
        <Image
          source={{
            uri: imgUrl,
          }}
          className="h-36 w-56 rounded"
        />
      </View>
      <View className="px-2">
        <Text className="pt-1 text-base font-bold">{title}</Text>
        <Text className="text-xs">{teacher}</Text>
        <View className="flex-row items-center">
          <View className="pt-1">
            <StarIcon color="green" size={18} opacity={0.4} />
          </View>
          <Text className="pt-1 text-xs text-green-500">{rating} </Text>
          <Text className="pt-1 text-xs text-gray-600">. {language}</Text>
        </View>
        <Text className="py-1 text-sm text-gray-700">Price-> {price} Eth</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BestSellerCards;
