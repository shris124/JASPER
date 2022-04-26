import {
	Dimensions,
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
} from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

import Articles from "../screens/Articles";
import Saved from "../screens/Saved";
import { Block, Text, theme } from "galio-framework";
// drawer
import CustomDrawerContent from "./Menu";
import Elements from "../screens/Elements";
// screens
import Home from "../screens/MyHome";
import Detail from "../screens/Detail";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import React from "react";
import Register from "../screens/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
	<TouchableOpacity
		style={[styles.customButton, styles.shadow]}
		onPress={onPress}
	>
		<View
			style={{
				width: 70,
				height: 70,
				borderRadius: 35,
				backgroundColor: argonTheme.COLORS.PRIMARY,
			}}
		>
			{children}
		</View>
	</TouchableOpacity>
);

function ElementsStack(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				mode: "card",
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Elements"
				component={Elements}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title="Elements"
							navigation={navigation}
							scene={scene}
						/>
					),
					cardStyle: { backgroundColor: "#F8F9FE" },
				}}
			/>
			<Stack.Screen
				name="Pro"
				component={Pro}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title=""
							back
							white
							transparent
							navigation={navigation}
							scene={scene}
						/>
					),
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}

function SavedStack(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				mode: "card",
				headerShown: "screen",
			}}
		>
			<Stack.Screen
				name="Saved"
				component={Saved}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title="Saved"
							navigation={navigation}
							scene={scene}
						/>
					),
					cardStyle: { backgroundColor: "#F8F9FE" },
				}}
			/>
			<Stack.Screen
				name="Pro"
				component={Pro}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title=""
							back
							white
							transparent
							navigation={navigation}
							scene={scene}
						/>
					),
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}

function ProfileStack(props) {
	return (
		<Stack.Navigator
			initialRouteName="Profile"
			screenOptions={{
				mode: "card",
				headerShown: "screen",
			}}
		>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							transparent
							white
							title="Profile"
							navigation={navigation}
							scene={scene}
						/>
					),
					cardStyle: { backgroundColor: "#FFFFFF" },
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="Pro"
				component={Pro}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title=""
							back
							white
							transparent
							navigation={navigation}
							scene={scene}
						/>
					),
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}

function HomeStack(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				mode: "card",
				headerShown: "screen",
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title="Home"
							tabs={tabs.categories}
							search
							navigation={navigation}
							scene={scene}
						/>
					),
					cardStyle: { backgroundColor: "#F8F9FE" },
				}}
			/>
			<Stack.Screen
				name="Detail"
				component={Detail}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							title="Detail"
							back
							navigation={navigation}
							scene={scene}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}

export default function LandingStack(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				mode: "card",
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Landing"
				component={Landing}
				option={{
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				option={{
					headerTransparent: true,
				}}
			/>
			<Stack.Screen name="App" component={AppStack} />
		</Stack.Navigator>
	);
}

function AppStack(props) {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				style: styles.bottomNav,
				headerShown: false,
			}}
			initialRouteName="HomeTab"
		>
			<Tab.Screen
				name="HomeTab"
				component={HomeStack}
				options={{
					tabBarIcon: ({ focused }) => {
						if (focused) {
							return (
								<View>
									<Icon
										name="home"
										family="MaterialIcons"
										size={30}
										color={argonTheme.COLORS.PRIMARY}
									/>
								</View>
							);
						} else {
							return (
								<View>
									<Icon
										name="home"
										family="MaterialIcons"
										size={30}
									/>
								</View>
							);
						}
					},
				}}
			/>
			<Tab.Screen
				name="SavedTab"
				component={SavedStack}
				options={{
					tabBarIcon: ({ focused }) => {
						if (focused) {
							return (
								<View>
									<Icon
										name="heart"
										family="AntDesign"
										size={25}
										color={argonTheme.COLORS.PRIMARY}
									/>
								</View>
							);
						} else {
							return (
								<View>
									<Icon
										name="heart"
										family="AntDesign"
										size={25}
									/>
								</View>
							);
						}
					},
				}}
			/>
			<Tab.Screen
				name="AccountTab"
				component={Register}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name="plus"
								family="Entypo"
								size={40}
								color={argonTheme.COLORS.WHITE}
							/>
						</View>
					),
					tabBarButton: (props) => <CustomTabBarButton {...props} />,
				}}
			/>
			<Tab.Screen
				name="ElementsTab"
				component={ElementsStack}
				options={{
					tabBarIcon: ({ focused }) => {
						if (focused) {
							return (
								<View>
									<Icon
										name="chat"
										family="Entypo"
										size={25}
										color={argonTheme.COLORS.PRIMARY}
									/>
								</View>
							);
						} else {
							return (
								<View>
									<Icon
										name="chat"
										family="Entypo"
										size={25}
									/>
								</View>
							);
						}
					},
				}}
			/>
			<Tab.Screen
				name="ProfileTab"
				component={ProfileStack}
				options={{
					tabBarIcon: ({ focused }) => {
						if (focused) {
							return (
								<View>
									<Icon
										name="person"
										family="MaterialIcons"
										size={30}
										color={argonTheme.COLORS.PRIMARY}
									/>
								</View>
							);
						} else {
							return (
								<View>
									<Icon
										name="person"
										family="MaterialIcons"
										size={30}
									/>
								</View>
							);
						}
					},
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	shadow: {
		shadowColor: argonTheme.COLORS.BLACK,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		shadowOpacity: 0.1,
		elevation: 5,
	},
	bottomNav: {
		position: "absolute",
		bottom: 25,
		left: 20,
		right: 20,
		elevation: 0,
		backgroundColor: argonTheme.COLORS.WHITE,
		borderRadius: 15,
		height: 90,
	},
	customButton: {
		top: -30,
		justifyContent: "center",
		alignItems: "center",
	},
});
