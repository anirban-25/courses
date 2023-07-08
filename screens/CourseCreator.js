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
    
    <Text className='pb-2 pl-5 pr-5 font-bold text-black text-lg'>You are just a few steps away from becoming a creator :)</Text>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5ed0fd", "#d65fbe"]}
        className='flex-1'
      >
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
                <View className="px-1 pt-2">
                  <TouchableOpacity
                    className={
                      "rounded-md " + (pressed ? "bg-blue-500" : "bg-gray-500")
                    }
                    onPress={() => {
                      touchMe(item);
                    }}
                  >
                    <Text className="text-white p-1">{item.title}</Text>
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
