import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.backgroundImg}
      />
      <View style={styles.heading}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>starting at $69,000</Text>
      </View>
    </View>
  );
}
