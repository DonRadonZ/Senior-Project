import React,{FunctionComponent} from 'react';
import {TouchableOpacity,ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { Text } from '@react-native-material/core';

import { LinearGradient } from 'expo-linear-gradient';

import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
//import { IStackScreenProps } from '../../Components/library/StackScreenProps';

import 'react-native-gesture-handler'

//screen
import { useNavigation } from '@react-navigation/native';


//icons
import { AntDesign } from '@expo/vector-icons';

import styles from './style';
import CheckButton from '../../../Components/Button/CheckButton';
import { RootStackParams } from '../../../../App';




const Stack = createStackNavigator()





export const ReceiverWaitScreen = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  

  return(
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.waitcontainer}
    resizeMode="cover"
    >
      <AntDesign name="exclamationcircleo" size={108} color="black" style={{marginBottom:75}} />
      <CheckButton 
      onPress={()=>{
        //go to payment
        navigation.navigate("Payment")}}
      >Examine</CheckButton>
      
      
      </ImageBackground>
    
      
  )
}