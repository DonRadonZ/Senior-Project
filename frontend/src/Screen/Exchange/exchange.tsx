import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import BalanceCard from "../../Components/Card/BalanceCard";
import { ScreenWidth } from "../../Components/shared";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Components/Colors/colors";
import { Text } from "@react-native-material/core";

export const Exchange = () => {
  const [balance, setBalance] = useState("");
  const [senderNumber, setSenderNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  const goToConfirmationPage = () => {
    navigation.navigate("ConfirmationPage", {
      accountNumber,
      amount,
      description,
    });
  };

  return (
    <ImageBackground
      source={require("../../../assets/Background-image.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.inputContainer}>
        <BalanceCard />
        <TextInput
          style={styles.input}
          placeholder="Account Number"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={goToConfirmationPage}
      >
        <Text style={styles.confirmButtonText}>Continue</Text>
      </TouchableOpacity>
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
  inputContainer: {
    marginBottom: 20,
    width: ScreenWidth * 0.8,
  },
  input: {
    height: 80,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: colors.orange,
    paddingVertical: 24,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 18,
  },
});
