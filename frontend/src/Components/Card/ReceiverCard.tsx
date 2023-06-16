import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";
import axios from "axios";

type ReceiverList = {
  userId:string;
  name:string;
  email:string;
  amount:string;

};
async function getReceiver(): Promise<ReceiverList[]> {
  // try {
  const url = "https://security-shopping-default-rtdb.asia-southeast1.firebasedatabase.app/receiver.json";
  const response = await axios.get<ReceiverList[]>(url);
  return response.data;
  // } catch (err) {
  //   console.log(err);
  //   return [];
  // }
}



const OrderCardA = () => {
  const [receiver,setReceiver] = useState<[]|ReceiverList[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  useEffect(()=>{(async()=>{
    const receiver = await getReceiver();
    console.log(receiver)
    setReceiver(receiver)

  })();
},[]);
  return (
    <TouchableOpacity>
      {Object.entries(receiver).map(([key,value])=>(
        <View key={key}>
              <Text>{value.name}</Text>
              <Text>{value.email}</Text>
              <Text>{value.amount}</Text>
        </View>
      ))}
    </TouchableOpacity>

    )
  
}
export default OrderCardA;

