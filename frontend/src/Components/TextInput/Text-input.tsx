import React,{ ComponentProps, memo } from "react";
import { View,StyleSheet,Text } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../Colors/colors";

type Props = ComponentProps<typeof TextInput>&{errorText?: string};

const TextInputs = ({errorText, ...props}: Props) =>(
 <View>
    
 </View>
)