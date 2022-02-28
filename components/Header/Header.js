import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";
const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome5 name="bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Create Job Ads</Text>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.profile}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: 20,
      },
    }),
    backgroundColor: colors.primary,
    height: 60,
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontWeight: "800",
    textAlign: "justify",
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});

export default Header;
