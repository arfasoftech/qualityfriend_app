import React from "react";
import { StyleSheet, Image } from "react-native";

const Brand = () => {
  return (
    <Image
      style={styles.brand}
      source={require("../../assets/images/logo-icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  brand: {
    width: 100,
    height: 100,
  },
});

export default Brand;
