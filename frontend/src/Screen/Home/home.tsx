import React from 'react';
//import {Text} from 'react-native'; 
import { Text } from "@react-native-material/core";
import RegularText from '../../Components/Texts/RegularText';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';
// import MainContainer from '../../component/Container/MainContainer';

export const Home = () =>{
    return(
        <LinearGradient
        colors={[colors.malibu1,colors.malibu2]}
        style={{
            flex:1,
            justifyContent: 'center',
            alignItems:'center'
        }}
        >
                <RegularText>Home</RegularText>
            </LinearGradient>
                
            
        
    )
}
