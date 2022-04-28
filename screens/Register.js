import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Create an Account</Text>
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
          placeholder="User Name"
          placeholderTextColor="#6314AB"
          style={{
            borderColor: argonTheme.COLORS.INFO,
            borderRadius: 4,
            backgroundColor: "#fff",
          }}
          iconContent={<Block />}
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
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
          right
          placeholder="Confirm Password"
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
      <View style={styles.registButton}>
        <Button onPress={() => navigation.navigate("Login")}>Register</Button>
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

export default Register;
