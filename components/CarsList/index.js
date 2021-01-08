import React from "react";
import { FlatList, View } from "react-native";
import cars from "./cars";
import CarItem from "../CarItem";
import styles from "./styles"

const CarsList = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem key={item.name} {...item} />}
      />
    </View>
  );
};

export default CarsList;
