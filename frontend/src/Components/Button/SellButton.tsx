import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";
import { colors } from "../Colors/colors";



import { ButtonProps } from "./types";

const SellButton = () => (
    <Pressable 
    style={Buttonstyles.ButtonContainer}
     ><Text>Press for End User</Text></Pressable>
  );
  
  export default SellButton;