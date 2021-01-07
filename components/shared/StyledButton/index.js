import React from 'react'
import { View, Text, Pressable } from "react-native";
import {default as style} from "./styles"

export default function StyledButton({type, textContent, onPress}) {
  const styles = style(type)
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{textContent}</Text>
      </Pressable>
    </View>
  )
}
