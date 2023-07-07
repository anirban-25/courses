import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SelectList } from "react-native-dropdown-select-list";
import React, { useState } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Navbar = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: -1, y: 1 }}
      colors={["#acc0feb1", "#acc0feb1"]}
    >
      <View className="my-2">
        <View className="pb-3 flex-row items-center mx-2 space-x-2">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jyIZKnCnSctH43DTboAeajoTwEeJPFbk_A&usqp=CAU",
            }}
            className=" mx-2 h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-semibold text-white text-sm">Courses</Text>
            <View>
              <Text className="font-bold text-lg">
                Your Activities
                <ChevronDownIcon size={20} color="#00CCBB" />
              </Text>
            </View>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        <View className="flex-row mx-4 space-x-2 items-center">
          <View className="bg-gray-100 p-2 mb-2 flex-row items-center rounded-lg flex-1">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput placeholder="start searching courses" />
          </View>
          <View>
            <TouchableOpacity
              className="w-15 max-w-[75px] rounded-md px-1 items-center border-[#00CCBB] bg-[#009f9286] "
              onPress={() => {
                navigation.navigate("CourseCreator");
              }}
            >
              <Text>Become</Text>
              <Text>a Creator</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Navbar;
