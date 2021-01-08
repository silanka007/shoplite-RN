import { StyleSheet } from "react-native";

const styles = (type) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      padding: 20,
      paddingTop: 10,
      paddingBottom: 10
    },
    button: {
      backgroundColor: type === "primary" ? "#171a20cc" : "#ffffffa6",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20
    },
    text: {
      color: type === "primary" ? "#ffffff" : "#171a20",
      fontSize: 14,
      fontWeight: "500",
      textTransform: "uppercase"
    }
  })
}

export default styles;