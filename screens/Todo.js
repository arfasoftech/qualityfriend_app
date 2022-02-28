import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Todo = () => {
  return (
    <View style={styles.container}>
      <Text>Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Todo;
