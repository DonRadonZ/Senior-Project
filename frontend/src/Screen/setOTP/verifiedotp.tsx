import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";

export const VerifiedOTP = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
  const testPassword = "123456";
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState("lock");
  const [circleColors, setCircleColors] = useState([
    '#222222', '#222222', '#222222', '#222222', '#222222', '#222222'
  ]);

  useEffect(() => {
    if (password.length === 6) {
      if (password === testPassword) {
        setLock("unlock");
        //Next Solution
        () =>{navigation.navigate('Home')}
      } else {
        console.log("Password Invalid");
      }
      setCount(0);
      setPassword("");
    }
  }, [password]);

  useEffect(() => {
    if(count === 6) {
      setCircleColors(['#222222', '#222222', '#222222', '#222222', '#222222', '#222222']);
    } else if (count === 5) {
      setCircleColors(['white', 'white', 'white', 'white', 'white', '#222222']);
    } else if (count === 4) {
      setCircleColors(['white', 'white', 'white', 'white', '#222222', '#222222']);
    } else if (count === 3) {
      setCircleColors(['white', 'white', 'white', '#222222', '#222222', '#222222']);
    } else if (count === 2) {
      setCircleColors(['white', 'white', '#222222', '#222222', '#222222', '#222222']);
    } else if (count === 1) {
      setCircleColors(['white', '#222222', '#222222', '#222222', '#222222', '#222222']);
    } else {
      setCircleColors(['#222222', '#222222', '#222222', '#222222', '#222222', '#222222']);
    }
  }, [count]);

  const numOne = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "1");
    
  };
  const numTwo = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "2");
    
  };
  const numThree = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "3");
    
  };
  const numFour = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "4");
    
  };
  const numFive = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "5");
    
  };
  const numSix = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "6");
    
  };
  const numSeven = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "7");
    
  };
  const numEight = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "8");
    
  };
  const numNine = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "9");
    
  };
  const numZero = async () => {
    await setCount((prevCount) => prevCount + 1);
    await setPassword((prevValue) => prevValue + "0");
    
  };
  const numTime = async () => {
    await setCount((prevCount) => prevCount - 1);
    await setPassword((prevValue) => prevValue.slice(0, -1));
    
  };

  const handlePress = () => {
    // Delete the last word from the value
    const words = password.split(" ");
    words.pop();
    const updatedValue = words.join(" ");
    setPassword(updatedValue);
  };

  console.log("Password: ", password);
  console.log("Count: ", count);

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
      <View style={{ paddingBottom: 25 }}>
        <Text>Verified your self</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "35%",
          paddingBottom: 30,
          justifyContent: "space-around",
        }}
      >
        <View style={[styles.circle, { backgroundColor: circleColors[0] }]} />
        <View style={[styles.circle, { backgroundColor: circleColors[1] }]} />
        <View style={[styles.circle, { backgroundColor: circleColors[2] }]} />
        <View style={[styles.circle, { backgroundColor: circleColors[3] }]} />
        <View style={[styles.circle, { backgroundColor: circleColors[4] }]} />
        <View style={[styles.circle, { backgroundColor: circleColors[5] }]} />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          paddingBottom: 40,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={numOne}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numTwo}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numThree}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          paddingBottom: 40,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={numFour}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numFive}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numSix}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>6</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          paddingBottom: 40,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={numSeven}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>7</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numEight}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>8</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numNine}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>9</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          paddingBottom: 40,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={styles.circleNone} />
        <TouchableOpacity onPress={numZero}>
          <View style={styles.circleNum}>
            <Text style={styles.fontButton}>0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numTime}>
          <View style={styles.circleDelete}>
            <FontAwesome5 name="times" color="#ABABAB" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        
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
  buttonCamera: {
    marginHorizontal: 40,
    padding: 40,
    backgroundColor: "#5E99E4",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 100,
  },
  circleNum: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#23539F",
    justifyContent: "center",
    alignItems: "center",
  },
  fontButton: {
    fontSize: 19,
    color: "#fff",
  },
  circleNone: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  circleDelete: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
