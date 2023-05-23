import {ReactNode} from 'react';
import {StyleProp,ViewStyle,TextStyle,GestureResponderEvent} from 'react-native';

export interface BuyButtonProps{
    children:ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

export interface SellButtonProps{
    children:ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

export interface ProfileButtonProps{
    children:ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

export interface AddNewButtonProps{
    children:ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined
}