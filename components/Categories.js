import { View, Text, Pressable } from "react-native";
import React from "react";
import { ChevronDoubleRightIcon } from "react-native-heroicons/outline";
import { FlatList } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "123",
    title: "Web Dev",
  },
  {
    id: "12343",
    title: "Design",
  },
  {
    id: "122343",
    title: "Health",
  },
  {
    id: "123243",
    title: "IT & Software",
  },
];
const Categories = ({styleMe}) => {
  const navigation = useNavigation();

  function touchMe({ id, title }) {
    navigation.navigate("CategoryScreen", {
      id,
      title,
    });
  }

  return (
    <View>
      <View className="flex-row items-center pr-3">
        <View className="flex-1">
          <Text className="font-bold text-lg">Trending Categories</Text>
        </View>
        <ChevronDoubleRightIcon size={20} color="#000000" />
      </View>

      <View>
        <View>
          <FlatList
            horizontal={true}
            contentContainerStyle={{
              flexDirection: `${styleMe}`,
            }}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <View className="px-1 pt-2">
                <Pressable
                  className="bg-black rounded-lg"
                  onPress={() => {
                    touchMe(item);
                  }}
                >
                  <Text className="text-white p-1">{item.title}</Text>
                </Pressable>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Categories;
