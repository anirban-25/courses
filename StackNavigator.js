import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import HomeScreen from "./screens/HomeScreen";
import useAuth from "./hooks/useAuth";
import CourseScreen from "./screens/CourseScreen";
import MyLearning from "./screens/MyLearning";
import WishList from "./screens/WishList";
import CategoryScreen from "./screens/CategoryScreen";
import CourseBoughtScreen from "./screens/CourseBoughtScreen";
import Quiz from "./screens/Quiz";
import CourseCreator from "./screens/CourseCreator"
import CategoryCreator from "./screens/CategoryCreator";
import CreateCourse from "./screens/CreateCourse";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {user} = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CourseScreen" component={CourseScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MyLearning" component={MyLearning} options={{ headerShown: false }}/>
        <Stack.Screen name="WishList" component={WishList} options={{ headerShown: false }}/>
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CourseBoughtScreen" component={CourseBoughtScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
        <Stack.Screen name="CourseCreator" component={CourseCreator} options={{ headerShown: false }} />
        <Stack.Screen name="CategoryCreator" component={CategoryCreator} options={{ headerShown: false }} />
        <Stack.Screen name="CreateCourse" component={CreateCourse} options={{ headerShown: false }} />
        </>
        
      ) : (
        <Stack.Screen name="notloggedin" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
