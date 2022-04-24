import React from "react";
import { SafeAreaView, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Theme } from '../components';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter your UW ID" placeholderTextColor='#6314AB'></TextInput>
      <TextInput placeholder="Password" placeholderTextColor='#6314AB' secureTextEntry={true}></TextInput>
      <Button title='Sign in' onPress={() => Alert.alert('Signing in')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
      container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
      }
});

export default Login;