import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const CourseBoughtScreen = () => {
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
  const navigation = useNavigation();
  return (
    <View>
      <View className="pl-3">
        <View className="mt-96"></View>
        <View>
          <Text className='text-gray-600'>Completed the Course?</Text>
          <Pressable className='mt-2 border-1 bg-blue-900 rounded-md w-24 p-1' onPress={()=>{
            navigation.navigate("Quiz", {
              id,
              category,
              title,
              language,
              teacher,
            });
          }}>
            <Text className='text-white'>Start the Quiz</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CourseBoughtScreen;
