import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";

interface Props{
    label: string;
  icon: string;
  onPress: () => void;
}

import { ButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";


const ProfileButton:FunctionComponent<ButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <Pressable 
    style={Buttonstyles.ProfileButtonContainer}
     ><Text style={Buttonstyles.ChoiceText}>{props.children}</Text></Pressable>
  );
}
  export default ProfileButton;