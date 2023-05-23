import React from "react";
import { Box,Text } from "@react-native-material/core";
import BalanceView from "./Balancestyles";

const PaymentCard = () => (
  <Box style={BalanceView.paymentContainer}>
    <Text style={BalanceView.BalanceText}>Balance</Text>
    <Text style={BalanceView.AmountDisplayedText}>12000</Text>
    {/* <Text style={BalanceView.TimeStampText}>15/5/2023</Text> */}
  </Box>
);

export default PaymentCard;