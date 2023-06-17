import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
import HomeScreen from "./screens/HomeScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourseScreen from "./screens/CourseScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Courses" component={CourseScreen}/>
        </StackNavigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
