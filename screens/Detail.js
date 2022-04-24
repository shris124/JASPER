import React from "react";
//galio
import { Block, Text, theme } from "galio-framework";
import {
	Dimensions,
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
//argon
import { Images, argonTheme, articles } from "../constants/";

import { Card } from "../components/";
import { users } from "../mock_data/mockData";

// Libraries
import StarRating from "react-native-star-rating";

const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
	{
		title: "Music Album",
		description:
			"Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
		image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
		price: "$125",
	},
	{
		title: "Events",
		description:
			"Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
		image: "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
		price: "$35",
	},
];

class Detail extends React.Component {
	renderProduct = (imgUri) => {
		const { navigation } = this.props;

		return (
			<TouchableWithoutFeedback
				style={{ zIndex: 3 }}
				key={`product-${imgUri}`}
				// onPress={() => navigation.navigate("Pro", { product: item })}
			>
				<Block center style={styles.productItem}>
					<Image
						resizeMode="cover"
						style={styles.productImage}
						source={{ uri: imgUri }}
					/>
				</Block>
			</TouchableWithoutFeedback>
		);
	};

	renderCards = () => {
		const item = articles[0];
		return (
			<Block flex style={styles.group}>
				<Text bold size={16} style={styles.title}>
					{articles[0].title}
				</Text>
				<Block flex>
					<Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
						<Block
							flex
							row
							style={{ paddingHorizontal: theme.SIZES.BASE }}
						>
							<Block>
								<Text
									size={16}
									color={argonTheme.COLORS.PRIMARY}
									style={styles.productPrice}
								>
									{item.condition}
								</Text>
								<Text center size={34}>
									{item.title}
								</Text>
							</Block>
							<Block flex row>
								<Image
									source={{ uri: Images.ProfilePicture }}
									style={styles.avatar}
								/>
								<Text center size={14} style={styles.userName}>
									Jessica 
								</Text>
								<StarRating rating={5} starSize={20}/>
							</Block>
						</Block>
						<ScrollView
							horizontal={true}
							pagingEnabled={true}
							decelerationRate={0}
							scrollEventThrottle={16}
							snapToAlignment="center"
							showsHorizontalScrollIndicator={false}
							snapToInterval={
								cardWidth + theme.SIZES.BASE * 0.375
							}
							contentContainerStyle={{
								paddingHorizontal: theme.SIZES.BASE / 2,
							}}
						>
							{articles &&
								item.images.map((image) =>
									this.renderProduct(image)
								)}
						</ScrollView>
						<Block>
							<Text
								center
								size={16}
								color={theme.COLORS.MUTED}
								style={styles.productDescription}
							>
								{item.description}
							</Text>
						</Block>
					</Block>
				</Block>
			</Block>
		);
	};

	renderAlbum = () => {
		const { navigation } = this.props;

		return (
			<Block
				flex
				style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
			>
				<Text bold size={16} style={styles.title}>
					Album
				</Text>
				<Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
					<Block flex right>
						<Text
							size={12}
							color={theme.COLORS.PRIMARY}
							onPress={() => navigation.navigate("Home")}
						>
							View All
						</Text>
					</Block>
					<Block
						row
						space="between"
						style={{
							marginTop: theme.SIZES.BASE,
							flexWrap: "wrap",
						}}
					>
						{Images.Viewed.map((img, index) => (
							<Block key={`viewed-${img}`} style={styles.shadow}>
								<Image
									resizeMode="cover"
									source={{ uri: img }}
									style={styles.albumThumb}
								/>
							</Block>
						))}
					</Block>
				</Block>
			</Block>
		);
	};

	render() {
		return (
			<Block flex center>
				<ScrollView showsVerticalScrollIndicator={false}>
					{this.renderCards()}
					{/* {this.renderAlbum()} */}
				</ScrollView>
			</Block>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		paddingBottom: theme.SIZES.BASE,
		paddingHorizontal: theme.SIZES.BASE * 2,
		marginTop: 22,
		color: argonTheme.COLORS.HEADER,
	},
	group: {
		paddingTop: theme.SIZES.BASE,
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 0,
	},
	albumThumb: {
		borderRadius: 4,
		marginVertical: 4,
		alignSelf: "center",
		width: thumbMeasure,
		height: thumbMeasure,
	},
	category: {
		backgroundColor: theme.COLORS.WHITE,
		marginVertical: theme.SIZES.BASE / 2,
		borderWidth: 0,
	},
	categoryTitle: {
		height: "100%",
		paddingHorizontal: theme.SIZES.BASE,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	imageBlock: {
		overflow: "hidden",
		borderRadius: 4,
	},
	productItem: {
		width: cardWidth - theme.SIZES.BASE * 2,
		marginHorizontal: theme.SIZES.BASE,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 7 },
		shadowRadius: 10,
		shadowOpacity: 0.2,
	},
	productImage: {
		width: cardWidth - theme.SIZES.BASE,
		height: cardWidth - theme.SIZES.BASE,
		borderRadius: 3,
	},
	productPrice: {
		paddingTop: theme.SIZES.BASE,
		paddingBottom: theme.SIZES.BASE / 2,
	},
	productDescription: {
		paddingTop: theme.SIZES.BASE,
		// paddingBottom: theme.SIZES.BASE * 2,
	},
	userName: {
		top: 20,
		left: 5
	}
});

export default Detail;
