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
import { StyleSheet, Alert, Image } from "react-native";

const { width } = Dimensions.get("screen");

const PostDone = ({ navigation }) => {
	return (
		<Block style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/imgs/icon.png")}
			></Image>
			<Image
				source={require("../assets/imgs/post-done.png")}
				style={{ width: 200, height: 320 }}
			></Image>
			<Text style={styles.title}>Well Done!</Text>
			<Text style={styles.subtitle}>Let's explore some more items!</Text>
			<Button
				onPress={() => navigation.navigate("Home")}
				style={{ width: width - theme.SIZES.BASE * 4, marginTop: 20, justifyContent:'center', alignItems:'center', borderRadius: 30 }}
				textStyle={{ fontSize: 15, fontWeight: "600" }}
			>
				Back to Home
			</Button>
		</Block>
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
	title: {
		fontWeight: "bold",
		fontSize: 35,
		paddingTop: 30,
		paddingBottom: 30,
	},
	subtitle: {
		fontSize: 25,
		paddingBottom: 30,
		color: argonTheme.COLORS.GRAY
	},
	signInButton: {
		paddingTop: 10,
	},
	greyButtons: {
		paddingTop: 15,
		alignItems: 'center'
	},
});

export default PostDone;
