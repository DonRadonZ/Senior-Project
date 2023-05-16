import React from 'react';
import {ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';
import SellButton from '../../Components/Button/SellButton';
import BuyChoiceButton from '../../Components/Button/BuyChoiceButton';
import SellChoiceButton from '../../Components/Button/SellChoiceButton';
import styles from '../../Components/Container/Backgroundstyle';

export const Exchange = () =>{
  return(
    <ImageBackground
    source={require("../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
  >
          <BuyChoiceButton/>
          <SellChoiceButton/>
      </ImageBackground>
      
  )
}

