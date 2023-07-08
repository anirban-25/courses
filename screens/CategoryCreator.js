import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native";

const CategoryCreator = () => {
  const {
    params: { id, title },
  } = useRoute();
  const [titleName, onChangeTitle] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [lang, onChangeLang] = React.useState("");
  const [price, onChangePrice] = React.useState("");
  const [desc, onChangeDesc] = React.useState("");
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <View className="h-[100%]">
        <View className="mt-10 mx-5 flex-1">
          <View>
            <Text className="text-2xl mt-3 text-white">
              You are on your way on creating a
              <Text className="font-bold"> {title} </Text>course!
            </Text>
            <Text className="mt-2 mb-5 text-gray-200">
              Please fill in the required informations so that we can create
              your course successfully
            </Text>
          </View>
          <View className="mt-7 shadow-lg shadow-black">
            <TextInput
              testID="LoginEmailAddress"
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={onChangeEmail}
              value={email}
              className="mb-3 bg-white text-gray-500 p-1 rounded-lg"
              placeholder="email"
            />
            <TextInput
              onChangeText={onChangeTitle}
              value={titleName}
              className="mb-3 bg-white text-gray-500 p-1 rounded-lg "
              placeholder="title"
            />
            <TextInput
              onChangeText={onChangeLang}
              value={lang}
              className="mb-3 bg-white text-gray-500 p-1 rounded-lg "
              placeholder="language"
            />
            <TextInput
              keyboardType="numeric"
              onChangeText={onChangePrice}
              value={price}
              className="mb-3 bg-white text-gray-500 p-1 rounded-lg "
              placeholder="price"
            />
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={100}
              onChangeText={onChangeDesc}
              value={desc}
              className="mb-3 px-1 bg-white text-gray-500 rounded-lg "
              placeholder="brief description regarding your course"
            />
          </View>
        </View>
        <View className="relative">
        <View className=" absolute bottom-0 -left-10 h-[70vw] w-[50vw]  bg-[#acc0fe5f] shadow-white shadow-inner origin-bottom rotate-45"></View>
        <View className=" absolute -bottom-[120px] right-[150px] h-[60vw] w-[60vw]  bg-[#acc0fe5f] shadow-white shadow-inner origin-bottom rotate-45"></View>
        <View className=" absolute bottom-0 -right-40 h-[80vw] w-[50vw]  bg-[#acc0fe5f] shadow-white shadow-inner origin-bottom -rotate-45"></View>
          <TouchableOpacity
            className="absolute bottom-5 right-5 p-1 px-2 bg-indigo-300 shadow-lg shadow-indigo-100 rounded-md"
            onPress={() =>
              navigation.navigate("CreateCourse", {
                email,
                titleName,
                lang,
                price,
                desc,
              })
            }
          >
            <Text className="text-base">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CategoryCreator;
