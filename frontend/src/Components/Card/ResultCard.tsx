import React from "react";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";

const ResultCard = () => (
  <Box style={BalanceView.ResultContainer}>
    <Text style={BalanceView.IDText}>Account ID: </Text>
    <Text style={BalanceView.DateText}>Date:</Text>
    <Text style={BalanceView.TimeText}>Time:</Text>
  </Box>
);

export default ResultCard;