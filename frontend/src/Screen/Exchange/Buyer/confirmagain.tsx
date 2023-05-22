import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Button,Box } from "@react-native-material/core";

import styles from "./style";

import ProfileButton from "../../../Components/Button/ProfileButton";

//navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";
import { useNavigation } from "@react-navigation/native";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

const ReConfirmationPage = ({
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
    {/* <Box style={styles.slipcontainer}>
      <Text style={styles.confirmationText}>
        Account Number: 123-456-7890
      </Text>
      <Text style={styles.confirmationText}>Amount: 3000</Text>
      <Text style={styles.confirmationText}>Note: Help </Text>
      </Box> */}
      
      <ProfileButton onPress={()=>{navigation.navigate('Buyer')}} >ReConfirm</ProfileButton>
    </ImageBackground>
  );
};



export default ReConfirmationPage;