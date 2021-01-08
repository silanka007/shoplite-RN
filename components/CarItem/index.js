import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../shared/StyledButton";
import styles from "./styles";

export default function CarItem({name, tagline, taglineCTA, image}) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.backgroundImg}
      />
      <View style={styles.heading}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}{" "}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
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
    </View>
  );
}
