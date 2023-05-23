import React, { FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";
import { AntDesign } from "@expo/vector-icons";


import { AddNewButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";
import { colors } from "../Colors/colors";


const AddNewButton:FunctionComponent<AddNewButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity 
    style={Buttonstyles.AddNewButtonContainer} onPress={props.onPress}
      ><AntDesign name="plus" color={colors.white} size={20} /></TouchableOpacity>
  );
}
  export default AddNewButton;