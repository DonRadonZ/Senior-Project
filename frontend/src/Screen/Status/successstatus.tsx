import React,{FunctionComponent} from 'react';
import {TouchableOpacity,ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { Text } from '@react-native-material/core';

import { LinearGradient } from 'expo-linear-gradient';
import CheckButton from '../../Components/Button/CheckButton';

import styles from '../Exchange/Buyer/style';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
//import { IStackScreenProps } from '../../Components/library/StackScreenProps';

import 'react-native-gesture-handler'

//screen
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../App';

//icons
import { AntDesign } from '@expo/vector-icons';




const Stack = createStackNavigator()





export const Wait = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  

  return(
    <ImageBackground
    source={require("../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
    >
      <AntDesign name="exclamationcircleo" size={150} color="black" />
      <CheckButton 
      onPress={()=>{
        //go to Login
        navigation.navigate("MyLogin")}}
      >Go to Login Page</CheckButton>
      
      
      </ImageBackground>
    
      
  )
}