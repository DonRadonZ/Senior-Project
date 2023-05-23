import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";



import { BuyButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";


const CheckButton:FunctionComponent<BuyButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity
    style={Buttonstyles.ProfileButtonContainer} onPress={props.onPress}
     ><Text style={Buttonstyles.ChoiceText}>{props.children}</Text></TouchableOpacity>
  );
}
  export default CheckButton;