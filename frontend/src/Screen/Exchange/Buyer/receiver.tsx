import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Box } from "@react-native-material/core";
import { colors } from "../../../Components/Colors/colors";
import SellButton from "../../../Components/Button/SellButton";
import styles from "./style";
import BuyChoiceButton from "../../../Components/Button/BuyChoiceButton";
interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

const ReceiverPage = ({
  // accountNumber,
  // amount,
  // description,
}) => {
  return (
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
    >
    <Box style={styles.slipcontainer}>
      <Text style={styles.confirmationText}>
        Receiver Code: 
      </Text>
      <Text style={styles.confirmationText}>Date: 1231546</Text>
      <Text style={styles.confirmationText}>Time: </Text>
      </Box>
     <BuyChoiceButton onPress={undefined}>Continue</BuyChoiceButton> 
    </ImageBackground>
  );
};



export default ReceiverPage;