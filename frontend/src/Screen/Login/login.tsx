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
        
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={(text) => setEmail(text)}
           
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            
          />
          <Button color="#77CE13" title="LOGIN" onPress={() => { navigation.navigate('MainPage') }} />
          <View style={styles.create_struc}>
          <Button color="" title="Create Account" onPress={()=>{navigation.navigate('MyRegister')}} />
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
    marginBottom: 20,
    bottom:50,
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
    height: 60,
    width: 350,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding:15,
    paddingLeft: 65,
    paddingRight:55,
    fontSize:16,
    paddingHorizontal: 10,
  },
});
