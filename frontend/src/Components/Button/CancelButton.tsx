import React,{FunctionComponent} from "react";
import { TouchableOpacity } from "react-native";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";



import { BuyButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";


const CancelButton:FunctionComponent<BuyButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity 
    style={Buttonstyles.CancelButtonContainer} onPress={props.onPress}
     ><Text style={Buttonstyles.ChoiceText} >{props.children}</Text></TouchableOpacity>
  );
}
  export default CancelButton;