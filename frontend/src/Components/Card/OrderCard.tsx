import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";

const OrderCardA = () => (
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
    }}><Text style={BalanceView.OrderViewText}>View</Text></TouchableOpacity>
  </Box>
);

export default OrderCardA;

