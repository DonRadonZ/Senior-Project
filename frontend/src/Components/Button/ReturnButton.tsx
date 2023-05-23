import React, { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";
import {  MaterialCommunityIcons } from "@expo/vector-icons";


import { AddNewButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";
import { colors } from "../Colors/colors";


const ReturnButton:FunctionComponent<AddNewButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity 
    style={Buttonstyles.ReturnButtonContainer} onPress={props.onPress}
      ><MaterialCommunityIcons name="home" color={colors.white} size={35} /></TouchableOpacity>
  );
}
  export default ReturnButton;