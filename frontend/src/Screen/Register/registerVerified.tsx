import React, { useEffect, useState } from 'react'
import {
  ImageBackground,
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  Alert,
  TouchableOpacity
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../App';
import { colors } from '../../Components/Colors/colors';
import { ScreenHeight } from '../../Components/shared';

export const RegisterVerified = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const testPassword = "1234";
    const [code, setCode] = useState("");
    const[pinReady,setPinReady] = useState(false);
    const [password, setPassword] = useState("");
    const codeDigitsArray = new Array(length).fill(0);

  useEffect(() => {
    if (password.length === 4) {
      if (password === testPassword) {
        
        //Next Solution
        () =>{navigation.navigate('Home')}
      } else {
        console.log("Password Invalid");
      }
      setCount(0);
      setPassword("");
    }
  }, [password]);

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
      <View style={{ backgroundColor: colors.white,width:"100%"}}>
        <View
          style={{
            paddingVertical: 15,
            alignItems: "center",
            paddingHorizontal: 60,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Enter Vertification Code
                  </Text>
                  
             <Text style={{ fontSize: 14, marginTop:ScreenHeight*0.25}}>
            SMS was sent to (+66)
                  </Text>
                  <Text style={{ fontSize: 14}}>
            you will receive SMS within 60 sec
                </Text>
        </View>
        

        <View style={styles.create_struc}>
          <Button color={colors.black} title="Later" onPress={()=>{navigation.navigate('MyLogin')}} />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  logo: {
    width: 150,
      height: 150,
    marginTop: 50,
    marginBottom: 24,
  },
  create_struc: {
    marginTop: 30,
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
    //justifyContent: "center",
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
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 200,
    height:200,
  }
});
function setCount(arg0: number) {
    throw new Error('Function not implemented.');
}

