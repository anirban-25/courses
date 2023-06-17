import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import HomeScreen from "./screens/HomeScreen";
import useAuth from "./hooks/useAuth";
import CourseScreen from "./screens/CourseScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {user} = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CourseScreen" component={CourseScreen} />
        </>
        
      ) : (
        <Stack.Screen name="notloggedin" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
