import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";

interface Props{
    label: string;
  icon: string;
  onPress: () => void;
}

import { ProfileButtonProps } from "./types";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";


const ProfileButton:FunctionComponent<ProfileButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity 
    style={Buttonstyles.ProfileButtonContainer} onPress={props.onPress}
     ><Text style={Buttonstyles.ChoiceText}>{props.children}</Text></TouchableOpacity>
  );
}
  export default ProfileButton;