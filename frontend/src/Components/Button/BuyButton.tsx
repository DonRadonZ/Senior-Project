import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";

interface Props{
    label: string;
  icon: string;
  onPress: () => void;
}




const BuyButton = () => (
    <Pressable 
    style={Buttonstyles.ButtonContainer}
     ><Text style={Buttonstyles.ChoiceText}>Button for Buyer</Text></Pressable>
  );
  
  export default BuyButton;