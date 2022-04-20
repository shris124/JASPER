import React from "react";
import {
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Card, Icon } from "../components";
import articles from "../constants/articles";
import { argonTheme } from "../constants";
const { width } = Dimensions.get("screen");

const Home = () => {
	return (
		<Block flex center style={styles.home}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.articles}
			>
				<Block flex>
					<Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
						<Block style={styles.rows}>
							<TouchableOpacity
								onPress={() => navigation.navigate("Pro")}
							>
								<Block
									row
									middle
									space="between"
									style={{ paddingTop: 7 }}
								>
									<Text h4 style={styles.title}>
										Latest Posts
									</Text>
									<Icon
										name="chevron-right"
										family="entypo"
										style={{ paddingRight: 5 }}
									/>
								</Block>
							</TouchableOpacity>
						</Block>
					</Block>
					<Block flex row>
						<Card
							item={articles[0]}
							style={{ marginRight: theme.SIZES.BASE }}
						/>
						<Card item={articles[1]} />
					</Block>
					<Block flex row>
						<Card
							item={articles[2]}
							style={{ marginRight: theme.SIZES.BASE }}
						/>
						<Card item={articles[3]} />
					</Block>
					<Block flex row>
						<Card
							item={articles[4]}
							style={{ marginRight: theme.SIZES.BASE }}
						/>
						<Card item={articles[5]} />
					</Block>
					<Block flex row>
						<Card
							item={articles[6]}
							style={{ marginRight: theme.SIZES.BASE }}
						/>
						<Card item={articles[7]} />
					</Block>
					<Block flex row>
						<Card
							item={articles[8]}
							style={{ marginRight: theme.SIZES.BASE }}
						/>
						<Card item={articles[9]} />
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
});

export default Home;
