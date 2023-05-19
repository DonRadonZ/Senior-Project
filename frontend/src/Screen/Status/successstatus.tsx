import React,{FunctionComponent} from 'react';
import {TouchableOpacity,ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { Text } from '@react-native-material/core';

import { LinearGradient } from 'expo-linear-gradient';
import BuyChoiceButton from '../../Components/Button/BuyChoiceButton';
import SellChoiceButton from '../../Components/Button/SellChoiceButton';

import styles from '../Exchange/Buyer/style';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
//import { IStackScreenProps } from '../../Components/library/StackScreenProps';

import 'react-native-gesture-handler'

//screen
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../App';




const Stack = createStackNavigator()





export const Success = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  

  return(
    <ImageBackground
    source={require("../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
    >
    
      <BuyChoiceButton 
      onPress={()=>{
        //go to payment
        navigation.navigate("Payment")}}
      >Press for Buyer</BuyChoiceButton>
      <SellChoiceButton onPress={()=>{alert("List")}}>Press for End User</SellChoiceButton>
      
      </ImageBackground>
    
      
  )
}