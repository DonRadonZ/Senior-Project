import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";
import Balancestyles from "./Balancestyles";
import axios from "axios";



type BuyerList = {
  userId:string;
  name:string;
  email:string;
  amount:string;
  status:string;
};


async function getBuyer(): Promise<BuyerList[]> {
  // try {
  const url = "https://security-shopping-default-rtdb.asia-southeast1.firebasedatabase.app/buyer.json";
  const response = await axios.get<BuyerList[]>(url);
  return response.data;
  // } catch (err) {
  //   console.log(err);
  //   return [];
  // }
}




const ListCardA = () => {
  const [buyer,setBuyer] = useState<[]|BuyerList[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  useEffect(()=>{(async()=>{
    const buyer = await getBuyer();
    console.log(buyer)
    setBuyer(buyer)

  })();
},[]);

  return (
    <TouchableOpacity>

          {Object.entries(buyer).map(([key,value])=>(
            <View key={key}>
              <Text>{value.name}</Text>
              <Text>{value.email}</Text>
              <Text>{value.amount}</Text>
              <Text>{value.status}</Text>
            </View>

          ))}
         
    </TouchableOpacity>
  );
}
export default ListCardA;

