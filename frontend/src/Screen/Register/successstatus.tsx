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
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../Components/Colors/colors';




const Stack = createStackNavigator()





 const RegisterSuccess = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  

  return(
    <ImageBackground
    source={require("../../../assets/Background-image.jpg")}
    style={styles.statuscontainer}
    resizeMode="cover"
    >
          <FontAwesome name="check-circle" size={300} color={colors.maingreen} style={{marginBottom:40}} />
      <CheckButton 
      onPress={()=>{
        //go to payment
        navigation.navigate("MyLogin")}}
      >Go to Home Page</CheckButton>
      
      
      </ImageBackground>
    
      
  )
}
export default RegisterSuccess