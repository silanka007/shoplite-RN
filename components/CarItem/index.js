import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../shared/StyledButton";
import styles from "./styles";

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
      <StyledButton
        type="primary"
        textContent="custom order"
        onPress={() => console.warn("custom order was pressed")}
      />
      <StyledButton
        type="secondary"
        textContent="existing inventory"
        onPress={() => console.warn("existing inventory was pressed")}
      />
    </View>
  );
}
