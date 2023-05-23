import React,{FunctionComponent} from "react";
import { TouchableOpacity } from "react-native";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";
import { FontAwesome } from "@expo/vector-icons";



import { BuyButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";


const SelectButton:FunctionComponent<BuyButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity 
    style={Buttonstyles.ChooseFileButtonContainer} onPress={props.onPress}
      ><FontAwesome name="file-image-o" size={25} /><Text style={Buttonstyles.ChoiceText} >{props.children}</Text></TouchableOpacity>
  );
}
  export default SelectButton;