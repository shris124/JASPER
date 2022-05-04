import React from "react";
import { Dimensions, SafeAreaView, Text } from "react-native";
import { Block, theme } from "galio-framework";
import { TextInput } from "react-native-gesture-handler";
import { Theme } from "../components";
//import { ShoppingHome } from "../assets/imgs";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import { Icon, Input, Button } from "../components/";
import { argonTheme, tabs } from "../constants/";
import { StyleSheet, View, Alert, Image } from "react-native";

const { width } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/imgs/icon.png")}
      ></Image>
      <Image source={require("../assets/imgs/login.png")} style={{width: width, height: 320}}></Image>
      <Text style={styles.textHeader}>Welcome Back!</Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
          placeholder="Email"
          placeholderTextColor="#6314AB"
          iconContent={
            <Icon
              size={11}
              style={{ marginRight: 10 }}
              color={argonTheme.COLORS.ICON}
              name="mail"
              family="Feather"
            />
          }
        />
      </Block>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
          placeholder="Password"
          placeholderTextColor="#6314AB"
          secureTextEntry={true}
          iconContent={
            <Icon
              size={11}
              style={{ marginRight: 10 }}
              color={argonTheme.COLORS.ICON}
              name="login"
              family="Entypo"
            />
          }
        />
      </Block>
      <View style={styles.greyButtons}>
        <Text
          onPress={() => navigation.navigate("SignUp")}
          style={{ color: "grey", marginBottom: 10}}
        >
          Create an Account
        </Text>
        <Text
          onPress={() => navigation.navigate("Recovery")}
          style={{ color: "grey" }}
        >
          Forgot password?
        </Text>
      </View>
      <View style={styles.signInButton}>
        <Button onPress={() => navigation.navigate("App")} textStyle={{fontSize: 15, fontWeight: '600'}}>Sign In</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 70,
    height: 70,
    position: "absolute",
    top: 50,
    left: 15,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 30,
    paddingBottom: 30,
  },
  signInButton: {
    paddingTop: 10,
  },
  greyButtons: {
    paddingTop: 15,
  },
});

export default Login;
