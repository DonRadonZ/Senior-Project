import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Button,Box } from "@react-native-material/core";
import { colors } from "../../../Components/Colors/colors";
import SellButton from "../../../Components/Button/SellButton";
import styles from "./style";
import BuyChoiceButton from "../../../Components/Button/BuyChoiceButton";
import {  StackNavigationProp} from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import CancelButton from "../../../Components/Button/CancelButton";
import ExamineButton from "../../../Components/Button/ExamineButton";
interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

const ReportPage = ({
  // accountNumber,
  // amount,
  // description,
  
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (

    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
    >
      
      <Box style={styles.slipcontainer}>  
        <View>
      
        </View>
        
      </Box>
      {/* <Button title="Pending" loading disabled /> */}
      <ExamineButton onPress={()=>{navigation.navigate("ReceiverSlip")}} >Next</ExamineButton> 
      {/* <CancelButton onPress={()=>{}}>cancel send</CancelButton> */}
    </ImageBackground>
  );
};