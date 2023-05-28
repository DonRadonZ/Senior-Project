import React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Button,Box } from "@react-native-material/core";

import styles from "./style";

import ProfileButton from "../../../Components/Button/ProfileButton";

//navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

export const BuyerConfirmationScreen = (props:any) => {
  const {route} = props;
  const {account_id} = route.params;


  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.confirmationcontainer}
    resizeMode="cover"
    >
      <View style={{marginBottom:120,flexDirection:'row',marginRight: 200}}>
          <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{navigation.goBack()}}>
                <AntDesign name="arrowleft" size={24} color="black" />    
                <Text style={{ marginTop: 2 }}>Back</Text>
                </TouchableOpacity>
          <Text style={{left:70,top:4,fontSize:20,bottom:20}}>Confirmation</Text>
      </View>
    <Box style={styles.slipcontainer}>
      <Text style={styles.confirmationText}>
        Account Number: {props}
      </Text>
        <Text style={styles.confirmationText}>Amount:{ }</Text>
        <Text style={styles.confirmationText}>Note: { }</Text>
      </Box>
      
      <ProfileButton onPress={()=>{navigation.navigate('Buyer')}} >Continue</ProfileButton>
    </ImageBackground>
  );
};



