import React from "react";
import { Text, View, StyleSheet, ImageBackground,Image, TouchableOpacity } from "react-native";
import { Button,Box } from "@react-native-material/core";
import Background from "../../../Components/Background/background";

import styles from "./style";

import ProfileButton from "../../../Components/Button/ProfileButton";

//navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import RegularText from "../../../Components/Texts/RegularText";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

export const BuyerSlipScreen = ({
  // accountNumber,
  // amount,
  // description,
}) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.owncontainer}
    resizeMode="cover"
    >
    
      <SafeAreaView>
      <View style={{marginBottom:50,flexDirection:'row',marginRight: 200}}>
      <TouchableOpacity style={{flexDirection:'row', right: 20}}>
          <AntDesign name="arrowleft" size={24} color="black" style={{right:-10,marginTop:7}} />
          <Text style={{ marginTop: 10,right:-10 }}>Back</Text>
          </TouchableOpacity>
          <Text style={{left:60,top:4,fontSize:25,bottom:20}}>Buyer Slip</Text>
      </View>

          <Image
              style ={styles.strech}
              source={require("../../../mock/9234.jpg")}
              resizeMode="cover"
          />
   
      
      {/* <ProfileButton onPress={()=>{}} >Continue</ProfileButton> */}
      </SafeAreaView>
    </ImageBackground>
  );
};





