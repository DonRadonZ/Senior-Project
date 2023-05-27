import React,{FunctionComponent} from 'react';
import {TouchableOpacity,ImageBackground, View} from 'react-native'; 
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
import { colors } from '../../Components/Colors/colors';




const Stack = createStackNavigator()





export const Wait = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  

  return(
    <ImageBackground
    source={require("../../../assets/Background-image.jpg")}
    style={styles.waitcontainer}
    resizeMode="cover"
    >
      
      <View style={{marginBottom:100,flexDirection:'row',marginRight:300}}>
      <AntDesign name="arrowleft" size={24} color="black" />
      <Text>Back</Text>
      </View>
      <AntDesign name="clockcircle" size={200} color={colors.rose} style={{ marginBottom: 75 }} />
      
      // go back to payment
      <CheckButton 
      onPress={()=>{
        //go to payment
          navigation.navigate("Payment")
        }}
        
      >Exchange</CheckButton>
      
      
      </ImageBackground>
    
      
  )
}