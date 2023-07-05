import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native";


const CategoryCreator = () => {
  const {
    params: { id, title },
  } = useRoute();
  const [titleName, onChangeTitle] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [lang, onChangeLang] = React.useState('');
  const [price, onChangePrice] = React.useState('');
  const [desc, onChangeDesc] = React.useState('');
 const navigation= useNavigation();
  return (
    <View className="h-[100%]">
      <View className="mt-10 mx-5 flex-1">
        <View>
          <Text className="text-xl">
            You are on your way on creating a
            <Text className="font-bold"> {title} </Text>course!
          </Text>
          <Text className="mt-2 text-gray-600">
            Please fill in the required informations so that we can create your
            course successfully
          </Text>
        </View>
        <View className="mt-7">
          <TextInput
            testID="LoginEmailAddress"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={onChangeEmail}
            value={email}
            className="mb-3 bg-white text-gray-500 p-1 rounded-lg "
            placeholder="email"
          />
          <TextInput
          onChangeText={onChangeTitle}
          value = {titleName}
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
          onChangeText={onChangeDesc}
          value={desc}
            className="mb-3 bg-white text-gray-500 p-1 py-2 rounded-lg "
            placeholder="brief description regarding your course"
          />
        </View>
      </View>
      <View className='relative'>
        <TouchableOpacity className='absolute bottom-5 right-5 p-1 px-2 bg-indigo-300 rounded-md border-2' onPress={() => navigation.navigate('CreateCourse',  { email,titleName, lang, price, desc } )}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryCreator;
