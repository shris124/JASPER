import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/imgs/signUp.png")} style={{width: width , height: 320}} />
      <Text style={styles.textHeader}>Create an Account</Text>
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
          placeholder="User Name"
          placeholderTextColor="#6314AB"
          iconContent={
            <Icon
              size={11}
              style={{ marginRight: 10 }}
              color={argonTheme.COLORS.ICON}
              name="person"
              family="MaterialIcon"
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
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
          placeholder="Confirm Password"
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
      <View style={styles.registButton}>
        <Button onPress={() => navigation.navigate("Login")}>Sign Up</Button>
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
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 99,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 30,
  },
  registButton: {
    paddingTop: 30,
  },
});

export default SignUp;