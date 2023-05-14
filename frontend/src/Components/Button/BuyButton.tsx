import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";






const BuyButton = () => (
    <Pressable 
    style={Buttonstyles.ButtonContainer}
     ><Text style={Buttonstyles.ChoiceText}>Press for Buyer</Text></Pressable>
  );
  
  export default BuyButton;