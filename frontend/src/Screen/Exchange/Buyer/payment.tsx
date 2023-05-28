import React, { FunctionComponent,useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import PaymentCard from "../../../Components/Card/PaymentCard";
import { ScreenWidth } from "../../../Components/shared";

//import { colors } from "../../../Components/Colors/colors";
import { Text } from "@react-native-material/core";
//import ConfirmationPage from "./confirmation";

import styles from "./style";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { AntDesign } from "@expo/vector-icons";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}


export const PaymentScreen = () => {
  const [balance, setBalance] = useState("");
  const [senderNumber, setSenderNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  //"ConfirmationPage",
//   const goToConfirmationPage = () => {
//     navigation.navigate("ConfirmationPage", {
//       accountNumber,
//       amount,
//       description,
//     });
//   };

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}
    
    > 
    <ImageBackground
      source={require("../../../../assets/Background-image.jpg")}
      style={styles.bankcontainer}
      resizeMode="cover"
      >
        <View style={{ marginBottom: 120, flexDirection: 'row', marginRight: 200 }}>
          <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{navigation.goBack()}}>
          <AntDesign name="arrowleft" size={24} color="black" style={{right:10,marginTop:7}} />
            <Text style={{ marginTop: 10, right: 10 }}>Back</Text>
            </TouchableOpacity>
          <Text style={{left:70,top:4,fontSize:25,bottom:20}}>Payment</Text>
      </View>
      <View style={styles.inputContainer}>
        <PaymentCard />
        <TextInput
          style={styles.input}
          placeholder="Account Number"
          value={accountNumber}
          onChangeText={setAccountNumber}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={()=>{navigation.navigate('Confirmation',{ account: accountNumber,amount:amount,note:description})}}
      >
        <Text style={styles.confirmButtonText}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
};



