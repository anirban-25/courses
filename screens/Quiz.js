import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Quiz = () => {
  const {
    params: { id, category, title, language, teacher },
  } = useRoute();
  const navigation= useNavigation();
  return (
    <View className="h-[100%]">
      <View className="flex-1">
        <View className="m-5 py-6">
          <Text className="text-2xl font-bold">
            Q. Imagine this is a question?
          </Text>
        </View>
        <View className="pl-5">
          <TouchableOpacity onPress={()=>{
            navigation.navigate("CategoryScreen", {
              id,
              title,
            });
          }}>
            <Text className="text-lg border-2 border-indigo-300 mb-5  p-1 mr-5 bg-indigo-300 rounded-full pl-3">
              Option 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-lg border-2 border-indigo-300 mb-5  p-1 mr-5 bg-indigo-300 rounded-full pl-3">
              Option 2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-lg border-2 border-indigo-300 mb-5  p-1 mr-5 bg-indigo-300 rounded-full pl-3">
              Option 3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-lg border-2 border-indigo-300 mb-5  p-1 mr-5 bg-indigo-300 rounded-full pl-3">
              Option 4
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-4 mx-5 flex-row justify-between">
        <TouchableOpacity>
          <Text className=" border-2 p-1 px-2 rounded-md bg-indigo-400 text-base text-white border-indigo-400   ">Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className=" border-2 p-1 px-2 rounded-md bg-indigo-400 text-base text-white border-indigo-400   ">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;
