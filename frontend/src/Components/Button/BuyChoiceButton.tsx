import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";



import { BuyButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";


const BuyChoiceButton:FunctionComponent<BuyButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <Pressable 
    style={Buttonstyles.ButtonContainer} onPress={props.onPress}
     ><Text style={Buttonstyles.ChoiceText}>{props.children}</Text></Pressable>
  );
}
  export default BuyChoiceButton;