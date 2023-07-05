import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Footer from "../components/Footer";
import TrendCards from "../components/TrendCards";
import BestSellerCards from "../components/BestSellerCards";

const MyLearning = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 130 }}
        className="bg-gray-100"
      >
        <View className="">
          <View className="bg-[#000022]">
            <Text className="pt-10 pl-5 pb-10 text-white font-bold text-xl">
              My Learning
            </Text>
          </View>

          <View className="bg-gray-100 py-5 px-5 flex-row">
          
            <View className="">
              <Text className='text-base font-semibold mb-3'>Continue from where you had left</Text>
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
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default MyLearning;
