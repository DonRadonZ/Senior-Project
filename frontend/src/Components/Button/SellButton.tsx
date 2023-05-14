import React from "react";
import { Text, Pressable } from "@react-native-material/core";
import Buttonstyles from "./style";

interface SellButtonProps {
  onPress: () => void;
}

const SellButton: React.FC<SellButtonProps> = ({ onPress }) => (
  <Pressable style={Buttonstyles.ButtonContainer} onPress={onPress}>
    <Text>Continue</Text>
  </Pressable>
);

export default SellButton;
