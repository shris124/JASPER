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

const renderConversation = (conversation, navigation) => {
	const subjectId =
		conversation.participants[0] == userId
			? conversation.participants[1]
			: conversation.participants[0];
	const subjectData = users[subjectId];
	const objectData = items[conversation.itemId];
	const displayedMessage = () => {
		const content = conversation.messages[0].content;
		if (content.length > 20) {
			return content.slice(0, 20) + "...";
		} else {
			return content;
		}
	};
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

	// Temp
	const chatPage = subjectId == 'u00002' ? "Chat" : 'Chat2';

	return (
		<TouchableOpacity onPress={() => navigation.navigate(chatPage)}>
			<Block
				row
				middle
				space="between"
				style={{ paddingTop: 7 }}
				key={conversation.conversationId}
			>
				<Image
					source={{ uri: subjectData.avatar }}
					key={`viewed-${subjectData.avatar}`}
					resizeMode="cover"
					style={styles.avatar}
				/>
				<Block flex>
					<Text style={{ fontWeight: "bold", fontSize: 20 }}>
						{subjectData.userName}
					</Text>
					<Text>{displayedMessage()}</Text>
					<Text style={{ color: argonTheme.COLORS.GRAY }}>
						{displayedDate()}
					</Text>
				</Block>
				<Image
					source={{ uri: objectData.images[0] }}
					key={`viewed-${objectData.images[0]}`}
					resizeMode="cover"
					style={styles.thumb}
				/>
			</Block>
		</TouchableOpacity>
	);
};

const MessageCenter = (props) => {
	const {navigation} = props;
	return (
		<Block flex center style={styles.home}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.articles}
			>
				<Block flex>
					<Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
						{conversationList.map((conversation) => {
							return renderConversation(conversation, navigation);
						})}
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
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 40,
		borderWidth: 0,
		marginRight: 10,
	},
	thumb: {
		borderRadius: 20,
		marginVertical: 4,
		alignSelf: "center",
		width: 80,
		height: 80,
	},
});

export default MessageCenter;
