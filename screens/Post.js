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
	TextInput,
} from "react-native";
//argon
import { Images, argonTheme, articles } from "../constants/";

// Components & Constants
import { Button, Card, Icon, Input } from "../components/";
import { items } from "../mock_data/mockData";
import Tabs from "../components/Tabs";
import tabs from "../constants/tabs";

// Libraries
import * as ImagePicker from "expo-image-picker";
import { TouchableHighlight } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const Post = (props) => {
	const renderProduct = (item, index) => {
		const { navigation } = props;

		return (
			<TouchableWithoutFeedback
				style={{ zIndex: 3 }}
				key={`product-${item.title}`}
				onPress={() => navigation.navigate("Pro", { product: item })}
			>
				<Block center style={styles.productItem}>
					<Image
						resizeMode="cover"
						style={styles.productImage}
						source={{ uri: item.image }}
					/>
					<Block
						center
						style={{ paddingHorizontal: theme.SIZES.BASE }}
					>
						<Text
							center
							size={16}
							color={theme.COLORS.MUTED}
							style={styles.productPrice}
						>
							{item.price}
						</Text>
						<Text center size={34}>
							{item.title}
						</Text>
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
			</TouchableWithoutFeedback>
		);
	};
	const [descriptionInput, setDescriptionInput] =
		React.useState("Describe your item");
	const [imgUris, setImgUris] = React.useState([]);
	const handleChoosePhoto = async () => {
		// console.warn("Choosing Photo");
		const options = {
			maxWidth: 300,
			maxHeight: 300,
			mediaType: "photo",
		};
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		setImgUris(imgUris.concat([result.uri]));
	};

	const categoryTabs = () => {
		const defaultTab = tabs && tabs[0] && tabs[0].id;
		return (
			<Tabs
				data={tabs.categories || []}
				initialIndex={defaultTab}
				// onChange={(id) => navigation.setParams({ tabId: id })}
			/>
		);
	};

	const conditionTabs = () => {
		const defaultTab = tabs && tabs[0] && tabs[0].id;
		return (
			<Tabs
				data={tabs.conditions || []}
				initialIndex={defaultTab}
				// onChange={(id) => navigation.setParams({ tabId: id })}
			/>
		);
	};
	return (
		<Block flex center>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Block flex style={styles.group}>
					<Text bold size={20} style={styles.title}>
						Post Item
					</Text>
					<Block flex>
						<Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
							<Block
								style={{ paddingHorizontal: theme.SIZES.BASE }}
							>
								<Text size={18} style={styles.secondaryTitle}>
									Add Title
								</Text>
								<Input
									placeholder="Name of your item"
									iconContent={<Block />}
								/>
							</Block>
							<Block
								style={{ paddingHorizontal: theme.SIZES.BASE }}
							>
								<Text size={18} style={styles.secondaryTitle}>
									Add Description
								</Text>
								<TextInput
									style={styles.textInput}
									multiline={true}
									numberOfLines={6}
									maxLength={500}
									onChangeText={(text) =>
										setDescriptionInput(text)
									}
									value={descriptionInput}
								></TextInput>
							</Block>
							<Block>
								<Button onPress={() => handleChoosePhoto()}>
									Choose Photo
								</Button>
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
									{imgUris.map((imgUri) => (
										<ImageBackground
											source={{ uri: imgUri }}
											style={{
												width: 130,
												height: 130,
												marginHorizontal:
													theme.SIZES.BASE,
											}}
											imageStyle={{ borderRadius: 15 }}
											key={imgUri}
										>
											<TouchableHighlight
												style={{
													alignItems: "flex-end",
												}}
											>
												<Icon
													name="closecircleo"
													family="AntDesign"
													size={30}
													color={
														argonTheme.COLORS
															.WARNING
													}
												></Icon>
											</TouchableHighlight>
										</ImageBackground>
									))}
								</ScrollView>
							</Block>
							<Block
								style={{ paddingHorizontal: theme.SIZES.BASE }}
							>
								<Block flex row>
									<Icon
										name="tago"
										family="AntDesign"
										size={20}
									/>
									<Text>Tags</Text>
								</Block>
								<Block flex>
									<Text>Category</Text>
									{categoryTabs()}
								</Block>
								<Block flex>
									<Text>Condition</Text>
									{conditionTabs()}
								</Block>
							</Block>
							<Block
								style={{
									paddingHorizontal: theme.SIZES.BASE,
									marginVertical: theme.SIZES.BASE * 2,
								}}
							>
								<Block flex row alignItems={'flex-end'}>
									<Icon
										name="dollar"
										family="Foundation"
										size={25}
									/>
									<Text size={20}> {" Price"}</Text>
									<Input
										left
                                        rounded={true}
                                        borderless={true}
                                        placeholder={" Price of your item"}
										iconContent={
											<Icon
												name="dollar"
												family="Foundation"
												size={25}
											/>
										}
									/>
								</Block>
							</Block>
						</Block>
					</Block>
				</Block>
			</ScrollView>
		</Block>
	);
};

const styles = StyleSheet.create({
	title: {
		paddingBottom: theme.SIZES.BASE,
		paddingHorizontal: theme.SIZES.BASE * 2,
		marginTop: 22,
		color: argonTheme.COLORS.HEADER,
	},
	secondaryTitle: {
		color: argonTheme.COLORS.HEADER,
		marginTop: theme.SIZES.BASE / 2,
	},
	group: {
		paddingTop: theme.SIZES.BASE,
	},
	albumThumb: {
		borderRadius: 4,
		marginVertical: 4,
		alignSelf: "center",
		width: thumbMeasure,
		height: thumbMeasure,
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
	submitButtons: {
		borderRadius: 30,
	},
	textInput: {
		fontSize: 15,
		color: argonTheme.COLORS.HEADER,
		marginTop: theme.SIZES.BASE / 2,
		backgroundColor: theme.COLORS.WHITE,
		borderRadius: 4,
		borderColor: argonTheme.COLORS.BORDER,
		height: 100,
		shadowColor: argonTheme.COLORS.BLACK,
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 2,
		shadowOpacity: 0.2,
		elevation: 0,
	},
});

export default Post;
