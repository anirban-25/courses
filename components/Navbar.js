import { View, Text, Image, TextInput, Button } from "react-native";
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
const Navbar = () => {
  return (
    <View className='mb-2'>
      <View className="pb-3 flex-row items-center mx-2 space-x-2">
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jyIZKnCnSctH43DTboAeajoTwEeJPFbk_A&usqp=CAU",
          }}
          className=" mx-2 h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-sm">Courses</Text>
          <View>
            <Text
              className="font-bold text-lg"
            >
              Your Activities
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row mx-4 space-x-2 items-center">
        <View className="bg-gray-200 p-2 mb-2 flex-row items-center rounded-lg flex-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="start searching courses" />
        </View>

        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>
    </View>
  );
};

export default Navbar;
