import React from "react";
import { TouchableOpacity } from "react-native";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import { View } from "react-native";
import BalanceView from "./Balancestyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";
import { ActivityIndicator } from "react-native-paper";

const ListCardB = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
  return(
    <Box style={BalanceView.orderContainer}>
      <View style={{}}>
    <Text style={BalanceView.BalanceText}>List: 2</Text>
        
        <Text style={BalanceView.TimeStampText}>15/5/2023</Text>
      </View>
      <View>
      <TouchableOpacity ><Text style={BalanceView.OrderViewText}>View</Text></TouchableOpacity>
      <Text style={BalanceView.OrderCompleteText}>Complete</Text>
    </View>
  </Box>
);
}

export default ListCardB;