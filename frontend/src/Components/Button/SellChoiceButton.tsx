import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import { TouchableOpacity } from "react-native/";
import Buttonstyles from "./style";



import { SellButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";


const SellChoiceButton:FunctionComponent<SellButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity
    style={Buttonstyles.ButtonContainer} onPress={props.onPress}
     ><Text style={Buttonstyles.ChoiceText}>{props.children}</Text></TouchableOpacity>
  );
}
export default SellChoiceButton;
  