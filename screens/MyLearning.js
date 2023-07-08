import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import TrendCards from "../components/TrendCards";
import BestSellerCards from "../components/BestSellerCards";
import { LinearGradient } from "expo-linear-gradient";
const MyLearning = () => {
  return (
    <View className="flex-1 ">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#F2ECB6", "#AE8BA1"]}
        className="flex-1 "
      >
        <View className=" absolute bottom-0 -right-10 h-[40vh] w-[40vw] border-white border-2 bg-[#efe37d4f] z-10 origin-bottom -rotate-[60deg]"></View>
        <View className=" absolute bottom-40 -right-40 h-[40vh] w-[40vw] border-white border-2 bg-[#efe37d4f] z-10 origin-bottom -rotate-[60deg]"></View>
        <ScrollView className="">
          <View className="">
            <View className="bg-[#000022] pt-8 ">
              <Text className="pt-10 pl-5 pb-10 text-white font-bold text-xl">
                My Learning
              </Text>
            </View>

            <View className=" py-5 px-5 flex-row bgb-gray-200">
              <View className="">
                <Text className="text-base font-semibold mb-3">
                  Continue from where you had left
                </Text>

                <View className=" absolute top-10 -left-20 h-[40vh] w-[40vw] border-white border-2 bg-[#aa6f9542] z-10 origin-bottom rotate-45"></View>
                <TrendCards
                  id="1234"
                  imgUrl="https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"
                  category="Web Development"
                  title="The Complete FullStack Development Bootcamp"
                  rating={4.5}
                  language="English"
                  price={0.1}
                  teacher="Angela Yu"
                  description="Learn Web2.0 using latest HTML, CSS, JS"
                />
                <TrendCards
                  id="1234"
                  imgUrl="https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"
                  category="Web Development"
                  title="The Complete FullStack Development Bootcamp"
                  rating={4.5}
                  language="English"
                  price={0.1}
                  teacher="Angela Yu"
                  description="Learn Web2.0 using latest HTML, CSS, JS"
                />
                <BestSellerCards
                  id="1234"
                  category="Aritificial Intelligence"
                  imgUrl="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
                  title="Machine Learning"
                  rating={4.7}
                  language="Spanish"
                  price={0.022}
                  teacher="Dr. Erikson Holmes"
                  description="Learn the latest about AI and ML"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
      <View>
        <Footer />
      </View>
    </View>
  );
};

export default MyLearning;
