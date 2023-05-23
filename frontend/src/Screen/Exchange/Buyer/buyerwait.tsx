import React,{FunctionComponent} from 'react';
import {TouchableOpacity,ImageBackground} from 'react-native'; 





import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';


import 'react-native-gesture-handler'

//screen
import { useNavigation } from '@react-navigation/native';


//icons
import { AntDesign } from '@expo/vector-icons';
import { RootStackParams } from '../../../../App';
import styles from './style';
import CheckButton from '../../../Components/Button/CheckButton';




const Stack = createStackNavigator()





export const BuyerWaitScreen = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

  

  return(
    <ImageBackground
    source={require("../../../assets/Background-image.jpg")}
    style={styles.container}
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