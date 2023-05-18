import React from "react";
import { TouchableOpacity } from "react-native";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";

const OrderCardA = () => (
  <Box style={BalanceView.balanceContainer}>
    <Text style={BalanceView.BalanceText}>Order1</Text>
        <TouchableOpacity><Text style={BalanceView.OrderViewText}>View</Text></TouchableOpacity>
    <Text style={BalanceView.TimeStampText}>15/5/2023</Text>
  </Box>
);

export default OrderCardA;

