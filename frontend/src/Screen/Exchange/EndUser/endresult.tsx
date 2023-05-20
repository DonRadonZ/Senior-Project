import React from "react";
import { Text, View, StyleSheet,ImageBackground } from "react-native";
import { colors } from "../../../Components/Colors/colors";
import SellButton from "../../../Components/Button/SellButton";
import { AntDesign } from '@expo/vector-icons';

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

const EndOrder = ({
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
          <AntDesign name="checkcircleo" size={72} color="black" />
    <View style={styles.container}>
      <Text style={styles.confirmationText}>
        Account Number: 
      </Text>
      <Text style={styles.confirmationText}>Amount: 1000</Text>
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

export default EndOrder;