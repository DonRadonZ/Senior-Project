import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../Components/Colors/colors";
import SellButton from "../../../Components/Button/SellButton";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  accountNumber,
  amount,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.confirmationText}>
        Account Number: {accountNumber}
      </Text>
      <Text style={styles.confirmationText}>Amount: {amount}</Text>
      <Text style={styles.confirmationText}>Description: {description}</Text>
    </View>
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