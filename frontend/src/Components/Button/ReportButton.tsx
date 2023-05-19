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


const ReportButton:FunctionComponent<ProfileButtonProps> = (props) => {
  const navigation = useNavigation()
  return(
    <Pressable 
    style={Buttonstyles.ProfileButtonContainer} onPress={props.onPress}
     ><Text style={Buttonstyles.ChoiceText}>{props.children}</Text></Pressable>
  );
}
  export default ReportButton;