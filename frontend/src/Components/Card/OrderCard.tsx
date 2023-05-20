import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";


const OrderCardA = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
  return (
    <Box style={BalanceView.orderContainer}>
      <View style={{}}>
        <Text
          style={BalanceView.BalanceText}
        >
          Order1
        </Text>
        <Text style={BalanceView.TimeStampText}>15/5/2023</Text>
      </View>
      <TouchableOpacity style={{
        alignItems: "center"
      }} onPress={()=>{navigation.navigate('EndUserFile')}}><Text style={BalanceView.OrderViewText}>View</Text></TouchableOpacity>
    </Box>
  );
}
export default OrderCardA;

