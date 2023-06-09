import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground,Image, TouchableOpacity } from "react-native";
import { Button,Box } from "@react-native-material/core";

import styles from "../Buyer/style";

import ProfileButton from "../../../Components/Button/ProfileButton";

//navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import RegularText from "../../../Components/Texts/RegularText";
import CancelButton from "../../../Components/Button/CancelButton";
import SelectButton from "../../../Components/Button/SelectButton";
import { AntDesign } from "@expo/vector-icons";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

export const ReceiverSlipScreen = ({
  // accountNumber,
  // amount,
  // description,
}) => {
  const[image,setImage] = useState()

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.receivercontainer}
    resizeMode="cover"
    >
      <View style={{marginBottom:100,flexDirection:'row',marginRight: 200}}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" style={{right:-10,marginTop:7}} />
          <Text style={{ marginTop: 10,right:-10 }}>Back</Text>
          </TouchableOpacity>
          <Text style={{left:75,top:4,fontSize:25,bottom:20}}>Receiver Slip</Text>
      </View>
          <View>
              {/* <RegularText>Receiver Slip</RegularText> */}
              </View>
          {/* <Image
              style={styles.receive}
              source={require("../../../mock/9234.jpg")}
              resizeMode="cover"
          /> */}
        
   
      
      
      <SelectButton onPress={undefined}>File/Photo</SelectButton>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <ProfileButton onPress={() => { navigation.navigate("ReceiveWait") }} >Confirm</ProfileButton>
          {/* <CancelButton onPress={()=>{}}>Report</CancelButton> */}
    </ImageBackground>
  );
};
