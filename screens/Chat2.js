import React from "react";
import {
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button, Card, Icon } from "../components";
import articles from "../constants/articles";
import { items, users, conversations } from "../mock_data/mockData";
import { argonTheme } from "../constants";
const { width } = Dimensions.get("screen");


// Set to constant for presentation
const conversationList = Object.keys(conversations).map(
	(key) => conversations[key]
);
const conversation = conversationList[1];
const itemData = items[conversation.itemId];
const userId = users.u00001.userId;
const userData = users[userId];
const subjectId =
	conversation.participants[0] == userId
		? conversation.participants[1]
		: conversation.participants[0];
const subjectData = users[subjectId];
const userRole = subjectId == 'u00002' ? "seller" : "buyer";

const renderMessages = () => {
	const messages = conversation.messages.reverse();

	const date = new Date(conversation.updatedAt);

	
	// const displayedDate = () => {
	// 	if (Date.now() - date.getMilliseconds() >= 86400000) {
	// 		return (
	// 			date.getFullYear() +
	// 			"-" +
	// 			date.getMonth() +
	// 			"-" +
	// 			date.getDate()
	// 		);
	// 	} else {
	// 		return date.getHours() + ":" + date.getMinutes();
	// 	}
	// };

	return messages.map((message, idx) => {
		const avatarUri = users[message.userId].avatar;
		const SELF = 0;
		const SUBJECT = 1;
		const speaker = message.userId == userId ? SELF : SUBJECT;
		const avatar = (
			<Image
				source={{ uri: avatarUri }}
				resizeMode="cover"
				style={[
					styles.avatar,
					speaker == SELF ? { marginLeft: 10 } : { marginRight: 10 },
				]}
			/>
		);

		const messageContent = (
			<Block
				flex
				style={[
					styles.textBox,
					speaker == SELF
						? { backgroundColor: argonTheme.COLORS.LABEL, marginLeft: 50}
						: { backgroundColor: argonTheme.COLORS.BLOCK, marginRight: 50},
				]}
			>
				<Text>{message.content}</Text>
			</Block>
		);

		if (speaker == SELF) {
			return (
				<Block
					row
					middle
					space="between"
					style={{ paddingTop: 7, marginVertical: 5 }}
					key={conversation.conversationId + "_" + idx}
				>
					{messageContent}
					{avatar}
				</Block>
			);
		} else {
			return (
				<Block
					row
					middle
					space="between"
					style={{ paddingTop: 7 }}
					key={conversation.conversationId + "_" + idx}
				>
					{avatar}
					{messageContent}
				</Block>
			);
		}
	});
};

const Chat2 = (props) => {
	const { navigation } = props;
	return (
		<Block flex center style={styles.home}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.articles}
			>
				<Block flex>
					<Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
						{/* <TouchableOpacity
							onPress={() =>
								navigation.navigate("Message Center")
							}
						>
							<Block flex row style={styles.ratingButton}>
								<Block width={(width / 7) * 4}>
									<Text style={{ fontWeight: "600" }}>
										Click here to rate your trading
										experiecne when you're done!
									</Text>
								</Block>
								<Image
									source={{ uri: itemData.images[0] }}
									resizeMode="cover"
									style={styles.thumb}
								/>
							</Block>
						</TouchableOpacity> */}
					</Block>
					<Block style={{ marginVertical: 10 }}>
						{renderMessages()}
					</Block>

					{userRole == 'buyer' && <Block center>
						<Button style={styles.button} textStyle={{fontSize: 15, fontWeight: '600'}}>
							Pay the Seller
						</Button>
					</Block>}
				</Block>
			</ScrollView>
		</Block>
	);
};

const styles = StyleSheet.create({
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 40,
		borderWidth: 0,
	},
	button: {
		marginBottom: theme.SIZES.BASE,
		width: width - theme.SIZES.BASE * 4,
	},
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
	thumb: {
		borderRadius: 20,
		marginVertical: 4,
		alignSelf: "center",
		width: 80,
		height: 80,
	},
	textBox: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 20,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 3,
		shadowOpacity: 0.2,
		elevation: 3,
		alignSelf: 'center',
	},
	ratingButton: {
		marginHorizontal: 0,
		backgroundColor: argonTheme.COLORS.BLOCK,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
	},
});

export default Chat2;
