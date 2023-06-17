import { View, Text } from "react-native";
import React from "react";
import BestSellerCards from "./BestSellerCards";
import { ScrollView } from "react-native";
import { ChevronDoubleRightIcon } from "react-native-heroicons/solid";

const BestSellers = () => {
  return (
    <View className="mt-2">
      <View className="flex-row items-center">
        <Text className="flex-1 text-lg font-bold">Best Sellers </Text>
        <View className="mr-3">
          <ChevronDoubleRightIcon size={20} color="#000000" />
        </View>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 15,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row"
        >
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
        </ScrollView>
      </View>
    </View>
  );
};

export default BestSellers;
