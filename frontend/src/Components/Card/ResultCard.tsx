import React from "react";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";
import { View } from "react-native";

const ResultCard = () => (
  <Box style={BalanceView.ResultContainer}>
    <View style={{marginLeft:100}}>
    <Text style={BalanceView.HeaderText}>informaton</Text>
    </View>
    <Text style={BalanceView.IDText}>Account ID: 2583112578</Text>
    <Text style={BalanceView.DateText}>Date:15/5/2023</Text>
    <Text style={BalanceView.TimeText}>Time:12:00:00</Text>
  </Box>
);

export default ResultCard;