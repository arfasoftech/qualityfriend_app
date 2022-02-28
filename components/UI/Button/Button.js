import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import colors from "../../../assets/colors/colors";

const Button = ({ onPress, title, style }) => {
  return (
    <Pressable style={{ ...styles.btn, ...style }} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: colors.primary,
  },
  btnText: {
    color: colors.white,
  },
});

export default Button;
