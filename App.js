import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("./assets/images/ModelS.jpeg")}
          style={styles.backgroundImg}
        />
        <View style={styles.heading}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>starting at $69,000</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  heading: {
    marginTop: "30%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
});
