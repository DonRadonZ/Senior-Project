import React from "react";
import { Text, View, StyleSheet,ImageBackground } from "react-native";
import { colors } from "../../../Components/Colors/colors";
import SellButton from "../../../Components/Button/SellButton";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

const ConfirmationPage = ({
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
    <View style={styles.container}>
      <Text style={styles.confirmationText}>
        Account Number: 
      </Text>
      <Text style={styles.confirmationText}>Amount: 9999</Text>
      <Text style={styles.confirmationText}>Description: </Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ConfirmationPage;