import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseScreen from "./screens/CourseScreen";
import WishList from "./screens/WishList";
import MyLearning from "./screens/MyLearning";
import { CartProvider } from "./context/cart_context";
import CourseBoughtScreen from "./screens/CourseBoughtScreen";
import CategoryScreen from "./screens/CategoryScreen";
import Quiz from "./screens/Quiz";
import CourseCreator from "./screens/CourseCreator";
import CategoryCreator from "./screens/CategoryCreator";
import CreateCourse from "./screens/CreateCourse";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator>
          <CartProvider>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Courses" component={CourseScreen} />
            <Stack.Screen name="WishList" component={WishList} />
            <Stack.Screen name="CourseScreen" component={CourseScreen} />
            <Stack.Screen name="CourseBoughtScreen" component={CourseBoughtScreen} />
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}} />
            <Stack.Screen name="CourseCreator" component={CourseCreator} options={{ headerShown: false }} />
            <Stack.Screen name="CategoryCreator" component={CategoryCreator} options={{ headerShown: false }} />
            <Stack.Screen name="CreateCourse" component={CreateCourse} options={{ headerShown: false }} />
            
          </CartProvider>
        </StackNavigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
