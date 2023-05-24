import React, { useState } from "react";
import {
  ImageBackground,
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenWidth } from "../../Components/shared";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();


  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}
  
    >
    <ImageBackground
      source={require("../../../assets/Background-image.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.structure}>
        <Image
          source={require("../../../assets/logo.png")} // Replace with the path to your logo image
          style={styles.logo}
        />
        <Text style={styles.text}>Welcome to SaveBuy!</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Button color="#77CE13" title="LOGIN" onPress={() => { navigation.navigate('MainPage') }} />
          <View style={styles.create_struc}>
          <Button color="" title="Create Account" onPress={()=>{navigation.navigate('MyRegister')}} />
          </View>
        </View>
        
      </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  create_struc: {
    marginTop: 10,
  },
  structure: {
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 24,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: ScreenWidth,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
