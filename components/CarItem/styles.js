import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
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
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%"
  },
  subtitleCTA: {
    textDecorationLine: "underline"
  }
})

export default styles;