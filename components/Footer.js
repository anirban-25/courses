import { View, Text } from "react-native";
import React from "react";

import {
  HomeIcon,
  HeartIcon,
  BookOpenIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View className="py-2 bg-black">
      <View className="flex-row justify-around">
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <View className="items-center">
            <HomeIcon size={26} color="white" />
            <Text className="text-xs text-white">Home</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("MyLearning")}
        >
          <View className="items-center">
            <BookOpenIcon size={26} color="white" />
            <Text className="text-xs text-white">My Learning</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("WishList")}
        >
          <View className="items-center">
            <HeartIcon size={26} color="white" />
            <Text className="text-xs text-white">WishList</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Footer;
