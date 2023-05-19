import React from 'react';
import {ImageBackground,StyleSheet} from 'react-native'; 
import { Text } from "@react-native-material/core";
import RegularText from '../../Components/Texts/RegularText';
// import MainContainer from '../../component/Container/MainContainer';
import styles from '../../Components/Container/Backgroundstyle';

export const Home = () =>{
    return(
        <ImageBackground
      source={require("../../../assets/Background-image.jpg")}
      style={styles.container}
        resizeMode="cover"
      >
        
                <RegularText>Transaction Status</RegularText>
             </ImageBackground>
                
            
        
    )
}
