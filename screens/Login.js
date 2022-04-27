import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Block, theme } from "galio-framework";
import { TextInput } from "react-native-gesture-handler";
import { Theme } from "../components";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import { Icon, Input } from "../components/";
import { argonTheme, tabs } from "../constants/";
import { StyleSheet, View, Button, Alert } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Back!</Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
          placeholder="Email/Phone Number"
          placeholderTextColor="#6314AB"
          iconContent={
            <Icon
              size={11}
              style={{ marginRight: 10 }}
              color={argonTheme.COLORS.ICON}
              name="search-zoom-in"
              family="ArgonExtra"
            />
          }
        />
      </Block>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
          right
          placeholder="Password"
          placeholderTextColor="#6314AB"
          secureTextEntry={true}
          style={{
            borderColor: argonTheme.COLORS.INFO,
            borderRadius: 4,
            backgroundColor: "#fff",
          }}
          iconContent={<Block />}
        />
      </Block>
      <Text
        onPress={() => navigation.navigate("Register")}
        style={{ color: "grey" }}
      >
        Create an Account
      </Text>
      <Text
        onPress={() => navigation.navigate("Register")}
        style={{ color: "grey" }}
      >
        Forgot password?
      </Text>
      <Button
        title="Sign in"
        onPress={() => navigation.navigate("App")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
