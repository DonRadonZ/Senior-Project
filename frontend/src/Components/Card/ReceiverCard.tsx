import React from "react";
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
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
  return (
    <Box style={BalanceView.orderContainer}>
    </Box>
  );
}
export default OrderCardA;

