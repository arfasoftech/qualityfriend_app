import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
const SideMenuItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <View style={styles.listItemText}>
        <Text>{item.name}</Text>
        {item.childrens.length ? (
          <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
        ) : null}
      </View>
      <AntDesign name={item.icon} size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: "#eee",
  },
  listItemText: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default SideMenuItem;
