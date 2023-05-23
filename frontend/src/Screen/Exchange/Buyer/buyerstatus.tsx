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

export const BuyerStatusScreen = ({
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
      <View style={{alignItems:'flex-end'}}>
          <Button title="Slip" color="black" onPress={()=>{navigation.navigate("MySlip")}}/>
        </View>
      <Box style={styles.slipcontainer}>  
        <View >
          <View style={{alignItems:'center',marginLeft:135}}>
      <Text style={styles.mainText}>Information</Text>
      </View>
      <Text style={styles.confirmationText}>
        Receiver Code: 2583112578
      </Text>
      <Text style={styles.confirmationText}>Date: 1231546</Text>
          <Text style={styles.confirmationText}>Time: 12:30:00 </Text>
        </View>
        
      </Box>
      {/* <Button title="Pending" loading disabled /> */}
      <ExamineButton onPress={()=>{navigation.navigate("ReceiverSlip")}} >Next</ExamineButton> 
      {/* <CancelButton onPress={()=>{navigation.navigate('Report')}}>cancel send</CancelButton> */}
    </ImageBackground>
  );
};



