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
import { ScreenWidth } from "../../Components/shared";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";

type RegisterForm = {
  full_name: string,
  birth_date: string,
  phone: string,
address: string,

}
export const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  //const form = useForm()
  

  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const data: RegisterForm = {
    full_name: name,
    birth_date: birthDate,
    phone: phone,
    address:address
  }

  // const [mou, setMou] = useState("");
  // const [soy, setSoy] = useState("");
  // const [road, setRoad] = useState("");
  // const [tambon, setTambon] = useState("");
  // const [district, setDistrict] = useState("");
  // const [province, setProvince] = useState("");
  // const [country, setCountry] = useState("");

  // const handleRegister = () => {
  //   if (name.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (birthDate.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (phone.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (address.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (mou.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (soy.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (road.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (tambon.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (district.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (province.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else if (country.trim() === "") {
  //     Alert.alert("Error", "Please enter a value.");
  //   } else {
  //     //Next Solution
  //   }
  // };

  const HorizontalLine = () => {
    return <View style={styles.horizontalLine} />;
  };
  
  const url = "http://127.0.0.1:5000/Create";
  const { control, handleSubmit } = useForm();

  const onRegisterPress = () => {
    axios.post(url, data)
    console.log(onRegisterPress)
    //navigation.navigate('MyRegisterMail')

  }
  
  
  const postData = () => {
    
    
  }
  

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
      </View>
      <View style={{ backgroundColor: '#fff',width:"90%" }}>
        <View style={{ paddingVertical: 15, alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight:"bold" }}>Create New Account</Text>
        </View>
        <HorizontalLine />
        <View style={{ paddingHorizontal:10, paddingTop:5 }}>
          <Text style={{ paddingBottom:5 }}>Fullname</Text>
          <TextInput
            style={styles.input}
            placeholder="Fullname"
              placeholderTextColor="gray"
              value={name}
            onChangeText={value=> setName(value)}
            
          />
        </View>
        <HorizontalLine />
        <View style={{ paddingHorizontal:10, paddingTop:15 }}>
          <Text style={{ paddingBottom:10 }}>Birth Date</Text>
          <TextInput
            style={styles.input}
            placeholder="YY/mm/dd"
              placeholderTextColor="gray"
              value={birthDate}
            onChangeText={value => setBirthDate(value)}
            
          />
        </View>
        <HorizontalLine />
        <View style={{ paddingHorizontal:10, paddingTop:5 }}>
          <Text style={{ paddingBottom:5 }}>Thailand (+66)</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone"
              placeholderTextColor="gray"
              value={phone}
            onChangeText={value => setPhone(value)}
              
              keyboardType="number-pad"
          />
        </View>
        <HorizontalLine />
        {/*Start Address Section */}
        <View style={{ paddingHorizontal:10, paddingTop: 5 }}>
          <Text style={{ paddingBottom: 5}}>Address</Text>
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputAddress}
                placeholder="address"
                  placeholderTextColor="gray"
                  value={address}
                onChangeText={value => setAddress(value)}
                
              />
            </View>
            {/* <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputAddress}
                placeholder="หมู่"
                placeholderTextColor="gray"
                onChangeText={(text) => setMou(text)}
                value={mou}
              />
            </View> */}
          </View>
          {/* <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputAddress}
                placeholder="ซอย"
                placeholderTextColor="gray"
                onChangeText={(text) => setSoy(text)}
                value={soy}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputAddress}
                placeholder="ถนน"
                placeholderTextColor="gray"
                onChangeText={(text) => setRoad(text)}
                value={road}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputAddress}
                placeholder="ตำบล"
                placeholderTextColor="gray"
                onChangeText={(text) => setTambon(text)}
                value={tambon}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputAddress}
                placeholder="อำเภอ"
                placeholderTextColor="gray"
                onChangeText={(text) => setDistrict(text)}
                value={district}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputAddress}
                placeholder="จังหวัด"
                placeholderTextColor="gray"
                onChangeText={(text) => setProvince(text)}
                value={province}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputAddress}
                placeholder="ประเทศ"
                placeholderTextColor="gray"
                onChangeText={(text) => setCountry(text)}
                value={country}
              />
            </View>
          </View> */}
        </View>
        {/*End Address Section */}

        <View style={styles.create_struc}>
          <Button color="#47BF91" title="NEXT" onPress={onRegisterPress} />
        </View>
      </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  logo: {
    width: 125,
    height: 125,
    marginBottom: 5,
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
