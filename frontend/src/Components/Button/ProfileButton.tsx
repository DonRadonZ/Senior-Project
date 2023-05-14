import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";

interface Props{
    label: string;
  icon: string;
  onPress: () => void;
}

import { ButtonProps } from "./types";


const ProfileButton:FunctionComponent<ButtonProps> = (props) => (
    <Pressable 
    style={Buttonstyles.ButtonContainer}
     ><Text style={Buttonstyles.ChoiceText}>{props.children}</Text></Pressable>
  );
  
  export default ProfileButton;