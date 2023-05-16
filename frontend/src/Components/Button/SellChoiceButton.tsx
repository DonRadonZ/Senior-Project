import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";

// interface Props{
//     label: string;
//   icon: string;
//   onPress: () => void;
// }




const SellChoiceButton = () => (
    <Pressable 
    style={Buttonstyles.ButtonContainer}
     ><Text style={Buttonstyles.ChoiceText}>Press for End User</Text></Pressable>
  );
  
  export default SellChoiceButton;
