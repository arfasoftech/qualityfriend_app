import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import BottomTabs from "../BottomTabs/BottomTabs";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header {...props} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {props.children}
      </ScrollView>
      <BottomTabs {...props} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
