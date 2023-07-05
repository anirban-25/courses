import { View, Text } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const CourseCreator = () => {
  const navigation= useNavigation();
const [pressed, setPressed] = useState(false);
  function touchMe({id, title}){
    setPressed(pressed => !pressed);
    navigation.navigate("CategoryCreator", {id, title});
  }

  return (
    <View className="mt-10">
      <View className="m-5 space-y-2">
        <Text className="text-base text-black font-semibold">
          Select the categories you would like to create content of
        </Text>
        <Text className="text-sm text-gray-500">
          Select at most four categories{" "}
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
                  className={"rounded-md " + (pressed? 'bg-blue-500' : 'bg-gray-500')}
                  onPress={() => {touchMe(item)}}
                >
                  <Text className="text-white p-1">{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default CourseCreator;
