import React from "react";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./styles";

const BalanceCard = () => (
  <Box style={BalanceView.balanceContainer}>
    <Text style={BalanceView.BalanceText}>Balance</Text>
    <Text style={BalanceView.AmountDisplayedText}>999,999</Text>
    <Text style={BalanceView.TimeStampText}>15/5/2023</Text>
  </Box>
);

export default BalanceCard;