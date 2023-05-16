import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";

//const RootStack = createStackNa

import { useNavigation } from "@react-navigation/core";
import  Payment  from "../../Screen/Payment/payment";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


function BuyChoiceButton(){
  //const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  return(
    <Pressable 
    style={Buttonstyles.ButtonContainer}
    onPress={() => {}}><Text style={Buttonstyles.ChoiceText}>Press for Buyer</Text></Pressable>
  );
}

function SellChoiceButton() {
  const navigation = useNavigation()
  return(
  <Pressable 
  style={Buttonstyles.ButtonContainer}
   ><Text style={Buttonstyles.ChoiceText} onPress={() => {}}>Press for End User</Text></Pressable>
  )
};
  export default BuyChoiceButton;