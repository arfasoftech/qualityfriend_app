import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Brand from "../components/Brand/Brand";
import Button from "../components/UI/Button/Button";
import CheckBox from "react-native-check-box";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import TextInput from "../components/UI/TextInput/TextInput";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.brandContainer}>
          <Brand />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            onChangeValue={(v) => setEmail(v)}
            keyboardType="email-address"
            placeholder="Email"
          />
          <TextInput placeholder="Password" />
          <View style={styles.bottomContainer}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                isChecked={remember}
                onClick={() => setRemember(!remember)}
                checkedCheckBoxColor={colors.primary}
              />
              <Text style={styles.forgetText}>Remember Me</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <FontAwesome name="lock" size={20} color="black" />
              <Text style={styles.forgetText}>Forget Password</Text>
            </View>
          </View>
          <Button title="Login" onPress={() => navigation.navigate("Home")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  innerContainer: {},
  brandContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgetText: {
    marginLeft: 5,
  },
});

export default Login;
