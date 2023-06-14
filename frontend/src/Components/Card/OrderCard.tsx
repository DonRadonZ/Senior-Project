import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";

type Props = {
  userId:string;
  name:string;
  email:string;

}


const OrderCardA = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
  return (
    <Box style={BalanceView.orderContainer}>
    </Box>
  );
}
export default OrderCardA;

