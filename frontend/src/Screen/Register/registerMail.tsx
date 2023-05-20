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
} from "react-native";
import { ScreenWidth } from "../../Components/shared";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";

export const RegisterMail = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  const handleRegister = () => {
    if (email.trim() === "") {
      Alert.alert("Error", "Please enter a value.");
    } else if (password.trim() === "") {
      Alert.alert("Error", "Please enter a value.");
    } else if (confirmPassword.trim() === "") {
      Alert.alert("Error", "Please enter a value.");
    } else {
      if (password === confirmPassword) {
        // Passwords match, proceed with form submission
        // You can perform any additional actions here
        console.log("Passwords match");
      } else {
        // Passwords do not match, handle the error or show an error message
        console.log("Passwords do not match");
      }
    }
  };

  const HorizontalLine = () => {
    return <View style={styles.horizontalLine} />;
  };

  return (
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
      </View>
      <View style={{ backgroundColor: "#fff",width: "90%" }}>
        <View
          style={{
            paddingVertical: 15,
            alignItems: "center",
            paddingHorizontal: 60,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Create New Account
          </Text>
        </View>
        <HorizontalLine />
        <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
          <Text style={{ paddingBottom: 10 }}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <HorizontalLine />
        <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
          <Text style={{ paddingBottom: 10 }}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <HorizontalLine />
        <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
          <Text style={{ paddingBottom: 10 }}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
        </View>

        <View style={styles.create_struc}>
          <Button color="#47BF91" title="NEXT" onPress={()=>{navigation.navigate("MyRegisterId")}} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
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
  inputAddress: {
    width: "95%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});
