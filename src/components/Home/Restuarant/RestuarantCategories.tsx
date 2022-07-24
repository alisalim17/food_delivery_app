import React from "react";
import { Text, View } from "react-native";
import useDataStore, { IRestaurant } from "../../../stores/useDataStore";
import { tw } from "../../../utils";
import uuid from "react-native-uuid";

interface IRestuarantCategoriesProps {
  item: IRestaurant;
}

const RestuarantCategories: React.FC<IRestuarantCategoriesProps> = ({
  item: { categories },
}) => {
  const { categories: categoryData } = useDataStore();

  return categories.map((categoryId) => (
    <View key={`${uuid.v4()}`} style={tw`flex-row items-center`}>
      <Text>{categoryData[categoryId]?.name}</Text>
      <View style={tw`w-1 h-1 rounded-full bg-darkgray mx-2`}></View>
    </View>
  ));
};

export default RestuarantCategories;