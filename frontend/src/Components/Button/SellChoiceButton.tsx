import React,{FunctionComponent} from "react";
import { Text,Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";
import { useNavigation } from "@react-navigation/native";

// interface Props{
//     label: string;
//   icon: string;
//   onPress: () => void;
// }




const SellChoiceButton = () => {
    const navigation = useNavigation()
    return(
    <Pressable 
    style={Buttonstyles.ButtonContainer}
     ><Text style={Buttonstyles.ChoiceText} onPress={() => {}}>Press for End User</Text></Pressable>
    )
};
  
  export default SellChoiceButton;
