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
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const RegisterId = () => {
  const [email, setEmail] = useState("");

  const handleRegister = () => {};

  const cameraFrontId = () => {};

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
      <View style={{ backgroundColor: "#fff" }}>
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
        <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
          <Text style={{ paddingBottom: 10 }}>ID 13-digits</Text>
          <TextInput
            style={styles.input}
            placeholder="ID"
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ paddingBottom: 10 }}>Laser ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Laser ID"
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ paddingBottom: 10 }}>ด้านหน้าบัตรประชาชน</Text>
          <TouchableOpacity onPress={cameraFrontId} style={styles.buttonCamera}>
            <FontAwesome5 name="camera" color="#333333" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ paddingVertical: 10 }}>ด้านหน้าบัตรประชาชน</Text>
          <TouchableOpacity onPress={cameraFrontId} style={styles.buttonCamera}>
            <FontAwesome5 name="camera" color="#333333" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.create_struc}>
          <Button color="#47BF91" title="NEXT" onPress={handleRegister} />
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
    //marginBottom: 5,
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
  buttonCamera: {
    marginHorizontal:40,
    padding: 40,
    backgroundColor: "#5E99E4",
    justifyContent: "center",
    alignItems: "center",
  }
});
