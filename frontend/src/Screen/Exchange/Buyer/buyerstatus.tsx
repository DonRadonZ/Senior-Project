import React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
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
import { AntDesign } from "@expo/vector-icons";
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
    style={styles.statuscontainer}
    resizeMode="cover"
    ><View style={{marginBottom:50,flexDirection:'row',marginRight:190}}>
                <AntDesign name="arrowleft" size={24} color="black" />    
                <Text style={{ marginTop: 3 }}>Back</Text>
                <Text style={{left:65,top:4,fontSize:20,bottom:20}}>Receiver Status</Text>
      </View>
      <View style={{alignItems:'flex-end'}}>
        <View style={{left:70,flexDirection:"row",marginBottom:10,marginTop:100}}>
        {/* <TouchableOpacity style={{backgroundColor:colors.malibu2,marginRight:20,width:70,height:30,alignItems:'center',justifyContent:"center",borderRadius:5}}><Text>Evidence</Text></TouchableOpacity> */}
          <TouchableOpacity style={{backgroundColor:colors.malibu1,width:70,height:30,alignItems:'center',justifyContent:"center",borderRadius:5}} onPress={() => { navigation.navigate("MySlip") }} ><Text>Slip</Text></TouchableOpacity>
        </View>
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



