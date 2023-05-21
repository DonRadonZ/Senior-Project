import React from "react";
import { Text, View, StyleSheet, ImageBackground,Image } from "react-native";
import { Button,Box } from "@react-native-material/core";

import styles from "./style";

import ProfileButton from "../../../Components/Button/ProfileButton";

//navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import RegularText from "../../../Components/Texts/RegularText";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

const OwnSlipPage = ({
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
          <View>
              <RegularText>My Slip</RegularText>
              </View>
          <Image
              style ={styles.strech}
              source={require("../../../mock/9234.jpg")}
              resizeMode="cover"
          />
   
      
      {/* <ProfileButton onPress={()=>{}} >Continue</ProfileButton> */}
    </ImageBackground>
  );
};



export default OwnSlipPage;

