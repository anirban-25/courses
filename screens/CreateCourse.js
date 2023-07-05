import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from 'react-native';

const CreateCourse = () => {
  const {
   params:{
    email, titleName, lang, price, desc
   },
  }=useRoute();
  const navigation= useNavigation();
  return (
    <View>
      <Text>{email}</Text>
      <Button
      title='heyyy'
      onPress={()=>{navigation.navigate("HomeScreen", {email, titleName, lang, price, desc})}}
      />
    </View>
  )
}

export default CreateCourse