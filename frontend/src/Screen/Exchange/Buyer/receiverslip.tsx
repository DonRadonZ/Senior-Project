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
import CancelButton from "../../../Components/Button/CancelButton";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

const ReceiverSlipPage = ({
  // accountNumber,
  // amount,
  // description,
}) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.receivercontainer}
    resizeMode="cover"
      >
          <View>
              <RegularText>Receiver Slip</RegularText>
              </View>
          <Image
              style={styles.receive}
              source={require("../../../mock/9234.jpg")}
              resizeMode="cover"
          />
   
      
          <ProfileButton onPress={() => { }} >Confirm</ProfileButton>
          <CancelButton onPress={()=>{}}>Report</CancelButton>
    </ImageBackground>
  );
};



export default ReceiverSlipPage;

