import { View, Text } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
    id: "122343",
    title: "Health",
  },
  {
    id: "123243",
    title: "IT & Software",
  },
];

const CourseCreator = () => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);
  function touchMe({ id, title }) {
    setPressed((pressed) => !pressed);
    navigation.navigate("CategoryCreator", { id, title });
  }

  return (
    <View className="pt-16 bg-blue-200 h-[100%]">
      <View className="bg-blue-200 z-10">
        <Text className="pb-2 pl-5 pr-5 font-bold text-black text-lg">
          You are just a few steps away from becoming a creator :)
        </Text>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#96dbf6", "#c98dbd"]}
        className="flex-1"
      >
        <View className=" absolute top-0 -left-40 h-[70vw] w-[70vw] border-white shadow-blue-900 shadow-inner bg-[#ca9ec163] origin-bottom rotate-45"></View>
        <View className=" absolute bottom-0 -right-40 h-[70vw] w-[70vw] border-white shadow-[#ff4edc] shadow-inner bg-[#71cdf150] origin-bottom rotate-45"></View>

        <View className="m-5 space-y-2">
          <Text className="text-base text-black font-semibold">
            Select the category you would like to create content of
          </Text>
          <View>
            <FlatList
              horizontal={true}
              contentContainerStyle={{
                flexDirection: "column",
              }}
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={({ item }) => (
                <View className="px-1 pt-3">
                  <TouchableOpacity
                    className={
                      "rounded-md " + (pressed ? "bg-gray-500" : "bg-gray-500")
                    }
                    onPress={() => {
                      touchMe(item);
                    }}
                  >
                    <Text className="text-white p-2 text-base">
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CourseCreator;
