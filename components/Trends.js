import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import TrendCards from "./TrendCards";
import { ChevronDoubleRightIcon } from "react-native-heroicons/solid";

const Trends = () => {
  return (
    <View>
      <View className='flex-row items-center pr-3'>
        <View className="flex-1">
          <Text className="font-bold text-lg">Trending Categories</Text>
          <Text className="text-xs text-gray-600">
            See what's trending here!!
          </Text>
        </View>
        <ChevronDoubleRightIcon size={20} color="#000000" />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
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
        
      </ScrollView>
    </View>
  );
};

export default Trends;
