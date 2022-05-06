import React from "react";
import { Dimensions, SafeAreaView, Text } from "react-native";
import { Block, theme } from "galio-framework";
import { TextInput } from "react-native-gesture-handler";
import { Theme } from "../components";
<<<<<<< HEAD

=======
//import { ShoppingHome } from "../assets/imgs";
import {
	auth,
	signInWithEmailAndPassword,
	signInWithGoogle,
} from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
>>>>>>> 489e1d8f2df68bc3ac9713f990e3faa11c5a1aef

import { Icon, Input, Button } from "../components/";
import { argonTheme, tabs } from "../constants/";
import { StyleSheet, Alert, Image } from "react-native";

const { width } = Dimensions.get("screen");



const Login = ({ navigation }) => {
<<<<<<< HEAD
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
      ></Button>*/
    </View>
  );
=======
	return (
		<Block style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/imgs/icon.png")}
			></Image>
			<Image
				source={require("../assets/imgs/login.png")}
				style={{ width: width, height: 320 }}
			></Image>
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
          style={{width: 300}}
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
          style={{width: 300}}
				/>
			</Block>
			<Block style={styles.greyButtons}>
				<Text
					onPress={() => navigation.navigate("SignUp")}
					style={{ color: "grey", marginBottom: 10 }}
				>
					Create an Account
				</Text>
				<Text
					onPress={() => navigation.navigate("Recovery")}
					style={{ color: "grey" }}
				>
					Forgot password
				</Text>
			</Block>
			<Button
				onPress={() => navigation.navigate("App")}
				style={{ width: width - theme.SIZES.BASE * 4, marginTop: 20, justifyContent:'center', alignItems:'center', borderRadius: 30 }}
				textStyle={{ fontSize: 15, fontWeight: "600" }}
			>
				Sign In
			</Button>
		</Block>
	);
>>>>>>> 489e1d8f2df68bc3ac9713f990e3faa11c5a1aef
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
		alignItems: 'center'
	},
});

export default Login;
