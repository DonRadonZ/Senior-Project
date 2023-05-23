import React, { useState } from "react";

//UI
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Button,Box } from "@react-native-material/core";
import { colors } from "../../../Components/Colors/colors";
import {RadioButton} from "react-native-paper";

import styles from "./style";


//navigtion
import {  StackNavigationProp} from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { useNavigation } from "@react-navigation/native";

import ExamineButton from "../../../Components/Button/ExamineButton";
import CancelButton from "../../../Components/Button/CancelButton";
interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

 export const ReceiverReportScreen = ({
  // accountNumber,
  // amount,
  // description,
  
}) => {
  const [value,setValue] = useState('')
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (

    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
    >
      
      <Box style={styles.Reportcontainer}>  
        
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      
        
          <RadioButton.Item label="1.Account No. not correct" value="first"  />
       
        <View>
        
        <RadioButton.Item  label="2.the Amount is not Correct" value="second" />
      </View>
      <View>
       
              <RadioButton.Item label="3.There is a problem with the transaction" value="third" />
          
            <RadioButton.Item value="4.other" label="other"/> 
           
      </View>
    </RadioButton.Group>

       
      </Box>
      {/* <Button title="Pending" loading disabled /> */}
      {/* <ExamineButton onPress={()=>{navigation.navigate("ReceiverSlip")}} >Report</ExamineButton>  */}
      {/* <CancelButton onPress={()=>{}}>Confirm</CancelButton> */}
    </ImageBackground>
  );
};

