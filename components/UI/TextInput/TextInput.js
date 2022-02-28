import React from "react";
import { StyleSheet } from "react-native";

const TextInput = (props) => {
  return <TextInput style={{ ...styles.input, ...props.style }} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    marginVertical: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: "gray",
  },
});

export default TextInput;
