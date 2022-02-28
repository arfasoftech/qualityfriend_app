import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import sidemenu from "../../navigation/sidemenu";
import SideMenuItem from "../SideMenuItem/SideMenuItem";
const SideMenu = (props) => {
  const [subMenu, setSubMenu] = React.useState({ open: false, key: 0 });
  const menuHandler = (index) => {
    const item = sidemenu[index];
    if (!item?.childrens?.length) {
      props.navigation.navigate("Home");
    } else {
      setSubMenu({ open: true, key: index });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Image
          style={styles.brand}
          source={require("../../assets/images/logo-icon.png")}
        />
      </View>
      <View style={styles.list}>
        {!subMenu.open &&
          sidemenu.map((item, i) => (
            <SideMenuItem key={i} item={item} onPress={() => menuHandler(i)} />
          ))}
        {subMenu.open && (
          <View>
            <TouchableOpacity
              onPress={() => setSubMenu({ open: false, key: 0 })}
              style={{ ...styles.flexRow, ...styles.submenuHeader }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color="black"
              />
              <Text style={styles.submenuTitle}>
                {sidemenu[subMenu.key].name}
              </Text>
            </TouchableOpacity>
            {sidemenu[subMenu.key].childrens.map((item, i) => (
              <SideMenuItem
                key={i}
                item={item}
                onPress={() => menuHandler(i)}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  submenuHeader: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  submenuTitle: {
    fontSize: 16,
  },
  container: {
    flex: 1,
  },
  brandContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  brand: {
    width: 100,
    height: 100,
  },
  list: {
    margin: 10,
  },
});

export default SideMenu;
