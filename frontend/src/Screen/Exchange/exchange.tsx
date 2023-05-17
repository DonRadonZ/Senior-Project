import React,{FunctionComponent} from 'react';
import {TouchableOpacity,ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { Text } from '@react-native-material/core';

//import BuyChoiceButton from '../../Components/Button/BuyChoiceButton';
//import SellChoiceButton from '../../Components/Button/SellChoiceButton';
import styles from '../../Components/Container/Backgroundstyle';
import { createStackNavigator } from '@react-navigation/stack';
import { IStackScreenProps } from '../../Components/library/StackScreenProps';

import 'react-native-gesture-handler'

//screen
import PaymentScreen from './payment';




const Stack = createStackNavigator()





export const Exchange = () => {
  
 // const { navigation, route } = props;

  

  return(
    <ImageBackground
    source={require("../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
    >
      
      
      </ImageBackground>
      
  )
}

