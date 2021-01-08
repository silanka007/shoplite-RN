import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import cars from "./cars";
import CarItem from "../CarItem";
import styles from "./styles"

const CarsList = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem key={item.name} {...item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
