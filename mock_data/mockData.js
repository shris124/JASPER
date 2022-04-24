import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

export const users = {

    "12345" :{
        userId: "12345",
        email: "12345@uw.edu",
        firstName: "Bob",
        lastName: "Ross",
        uw_authentication: true,
        interests: ["Furniture", "Electronics"],
        likedItems:["0000000"],
    },
    "1357" : {
        userId: "98765",
        email: "9876@uw.edu",
        firstName: "Cristiano",
        lastName: "Ronaldo",
        uw_authentication: true,
        interests: ["Furniture", "Electronics"],
        likedItems:["1357"]
    }
}

export const conversation = {
  "101010" : {
      conversationId: "101010",
      participants: ["12345", "98765"],
      createdAt: "2021-04-23T18:25:43.511Z",
      updatedAt: "2021-04-23T18:45:43.511Z",
      objectId: "1357",
      messages : {
        "2021-04-23T18:25:43.511Z" :
        {   content : "Hello 12345",
            userId: "98765"
        },
        "2021-04-23T18:45:43.511Z" :
        {   content: "Hello 98765",
            userId: "12345"
        }
    }
  }
}

export const items = {
    objectId: "1357",
    name: "Monarch Nightstand",
    price: "130",
    condition: "New",
    description: " A wooden night stand with double drawers",
    sellerID: "12345",
    UWvisibility: "True",
    dropOff: "False",
    imageUrl:"",
    pickUpLocation: "Red Square"
}

