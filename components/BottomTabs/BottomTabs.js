import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FAB } from "react-native-paper";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";
const BottomTabs = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity>
            <View style={styles.taskBtn}>
              <FontAwesome5 name="tasks" size={20} color="white" />
              <Text style={styles.taskText}>Task</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.btnGroup}>
            <AntDesign
              style={styles.btnGroupIcon}
              name="contacts"
              size={30}
              color={colors.primary}
            />
            <AntDesign
              style={styles.btnGroupIcon}
              name="contacts"
              size={30}
              color={colors.primary}
            />
            <AntDesign
              style={styles.btnGroupIcon}
              name="contacts"
              size={30}
              color={colors.primary}
            />
          </View>
        </View>
        <TouchableOpacity>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => console.log("Pressed")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 70,
    width: "100%",
    flexDirection: "row",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
      },
      android: {
        elevation: 15,
        position: "relative",
      },
    }),
  },
  taskBtn: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  taskText: {
    color: colors.white,
    fontSize: 18,
    marginLeft: 3,
    fontWeight: "700",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  btnGroup: {
    marginHorizontal: 20,
    flexDirection: "row",
  },
  btnGroupIcon: {
    marginHorizontal: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 30,
    backgroundColor: colors.red,
    borderTopColor: "transparent",
    borderBottomColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.7,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});
export default BottomTabs;
