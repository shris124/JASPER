import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

export const users = {
	u00001: {
		userId: "12345",
		email: "12345@uw.edu",
		firstName: "Bob",
		lastName: "Ross",
		uw_authentication: true,
		interests: ["Furniture", "Electronics"],
		likedItems: ["i00001"],
	},
	u00002: {
		userId: "98765",
		email: "9876@uw.edu",
		firstName: "Cristiano",
		lastName: "Ronaldo",
		uw_authentication: true,
		interests: ["Furniture", "Electronics"],
		likedItems: ["i00001, i00002"],
	},
};

export const conversation = {
	101010: {
		conversationId: "101010",
		participants: ["12345", "98765"],
		createdAt: "2021-04-23T18:25:43.511Z",
		updatedAt: "2021-04-23T18:45:43.511Z",
		objectId: "i00001",
		messages: {
			"2021-04-23T18:25:43.511Z": {
				content: "Hello Cris",
				userId: "u00001",
			},
			"2021-04-23T18:45:43.511Z": {
				content: "Hello Bob",
				userId: "u00002",
			},
		},
	},
};

export const items = {
	i00001: {
		itemId: "i00001",
		title: "Black IKEA chair adafds",
		sellerId: "u00001",
		condition: "Brand New",
		description:
			"Black IKEA chair in good condition, used for a year. Afakldfjakldfjakldfjakldfjlkadjfladjf;adfjladfj",
		images: [
			"https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
			"https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
		],
		price: 25.05,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00002: {
		itemId: "i00002",
		title: "iMac with Keyboard and Mouse",
		sellerId: "u00001",
		condition: "Brand New",
		description:
			"One and a half year old iMac, comes with Apple keyboard and Apple mouse",
		images: [
			"https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		],
		price: 700,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00003: {
		itemId: "i00003",
		title: "LANCOME Lipstick",
		sellerId: "u00001",
		condition: "Brand New",
		description:
			"Brand new, I accidently bought the wrong color and never used it.",
		images: [
			"https://images.unsplash.com/photo-1619352520578-8fefbfa2f904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
		],
		price: 20,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00004: {
		itemId: "i00004",
		title: "Comfy Hoodie",
		sellerId: "u00001",
		condition: "Brand New",
		description: "Nice comfy hoodie, 90% new",
		images: [
			"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
		],
		price: 20,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00005: {
		itemId: "i00005",
		title: "Bowls and Forks",
		sellerId: "u00001",
		condition: "Brand New",
		description: "Selling some old utencils",
		images: [
			"https://images.unsplash.com/photo-1577576308052-4c4f724ce7cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		],
		price: 15,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00006: {
		itemId: "i00006",
		sellerId: "u00002",
		condition: "Brand New",
		title: "Blue Heart Earings",
		description: "Pretty Earings, looks good with any clothes",
		images: [
			"https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80",
		],
		price: 30,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00007: {
		itemId: "i00007",
		sellerId: "u00002",
		condition: "Brand New",
		title: "Small Nightstand",
		description: "Lightweight Wooden nightstand",
		images: [
			"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202146/0234/margot-raffia-nightstand-2-c.jpg",
		],
		price: 25,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00008: {
		itemId: "i00008",
		sellerId: "u00002",
		condition: "Brand New",
		title: "PS4 Game Disks",
		description: "50% off for all games, send me a message for price",
		images: [
			"https://media-exp1.licdn.com/dms/image/C4E1BAQEDQeEhWurHog/company-background_10000/0/1519800213882?e=2147483647&v=beta&t=XCM5XgwsIIpM1O6DA2tsKBL719ixAayObx1EH0CumdI",
		],
		price: 20,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00009: {
		itemId: "i00009",
		sellerId: "u00002",
		condition: "Brand New",
		title: "Yoga Mat",
		description: "Fairly clean yoga mat",
		images: [
			"https://m.media-amazon.com/images/I/81mao7QZ1iL._AC_SL1500_.jpg",
		],
		price: 10,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
	i00010: {
		itemId: "i00010",
		sellerId: "u00002",
		condition: "Brand New",
		title: "30 LB Dog Food",
		description: "Unopend dog food",
		images: ["https://s7d2.scene7.com/is/image/PetSmart/5278693"],
		price: 30,
		pickUpLocation: "Red Square",
		dropOff: "False",
		UWvisibility: "True",
	},
};
