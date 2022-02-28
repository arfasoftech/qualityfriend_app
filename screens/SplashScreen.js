import React from "react";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";
import colors from "../assets/colors/colors";
import Brand from "../components/Brand/Brand";
import Button from "../components/UI/Button/Button";

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Brand />
      </View>
      <Button onPress={navigation.navigate("Login")} title="Get Started" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 30,
  },
});

export default SplashScreen;
