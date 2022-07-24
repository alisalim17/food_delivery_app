import React from "react";
import { FlatList, View } from "react-native";
import { useDataStore } from "../../stores";
import { tw } from "../../utils";
import RestaurantItem from "./Restuarant/RestuarantItem";
import uuid from "react-native-uuid";

const Restaurants = () => {
  const { restuarants } = useDataStore();
  return (
    <View>
      <FlatList
        data={restuarants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}-${uuid.v4()}`}
        renderItem={(props) => <RestaurantItem {...props} />}
        // contentContainerStyle={tw`py-4 px-1 mb-[30px]`}
        contentContainerStyle={tw`py-4 px-1 pb-96`}
      />
    </View>
  );
};

export default Restaurants;
