import React from "react";
import {
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Card, Icon } from "../components";
import articles from "../constants/articles";
import { items, users, conversations } from "../mock_data/mockData";
import { argonTheme } from "../constants";
import { object } from "prop-types";
const { width } = Dimensions.get("screen");

const userId = users.u00001.userId;
const conversationList = Object.keys(conversations).map(
	(key) => conversations[key]
);

const renderConversation = (conversation) => {
	const subjectId =
		conversation.participants[0] == userId
			? conversation.participants[1]
			: conversation.participants[0];
	const subjectData = users[subjectId];
	const objectData = items[conversation.objectId];
	const displayedMessage = conversation.messages[0].content;
	const date = new Date(conversation.updatedAt);
	const displayedDate = () => {
		if (Date.now() - date.getMilliseconds() >= 86400000) {
			return (
				date.getFullYear() +
				"-" +
				date.getMonth() +
				"-" +
				date.getDate()
			);
		} else {
			return date.getHours() + ":" + date.getMinutes();
		}
	};

	return (
		<Block row middle space="between" style={{ paddingTop: 7 }}>
			<Image
				source={{ uri: subjectData.portrait }}
				key={`viewed-${subjectData.portrait}`}
				resizeMode="cover"
				style={styles.portrait}
			/>
			<Block flex>
				<Text>{subjectData.userName}</Text>
				<Text>{displayedMessage}</Text>
				<Text>{displayedDate()}</Text>
			</Block>
			<Image
				source={{ uri: objectData.images[0] }}
				key={`viewed-${objectData.images[0]}`}
				resizeMode="cover"
				style={styles.thumb}
			/>
		</Block>
	);
};

const Chat = () => {
	return (
		<Block flex center style={styles.home}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.articles}
			>
				<Block flex>
					<Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
						<TouchableOpacity
							onPress={() => navigation.navigate("Pro")}
						>
							{conversationList.map((conversation) => {
								return renderConversation(conversation);
							})}
						</TouchableOpacity>
					</Block>
				</Block>
			</ScrollView>
		</Block>
	);
};

const styles = StyleSheet.create({
	home: {
		width: width,
		backgroundColor: theme.COLORS.WHITE,
	},
	articles: {
		width: width - theme.SIZES.BASE * 2,
		paddingVertical: theme.SIZES.BASE,
	},
	title: {
		textDecorationLine: "underline",
	},
	portrait: {
		width: 80,
		height: 80,
		borderRadius: 40,
		borderWidth: 0,
	},
	thumb: {
		borderRadius: 20,
		marginVertical: 4,
		alignSelf: "center",
		width: 80,
		height: 80,
	},
});

export default Chat;
