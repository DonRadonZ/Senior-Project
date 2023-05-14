import React from 'react';
import {Text, TouchableOpacity} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';
import SellButton from '../../Components/Button/SellButton';
import BuyButton from '../../Components/Button/BuyButton';

export const Exchange = () =>{
    return(
        <LinearGradient
        colors={[colors.malibu1,colors.malibu2]}
        style={{
            flex:1,
            padding: 25,
            paddingTop:40,
            justifyContent: 'center',
            alignItems:'center'
        }}
        >
            <BuyButton/>
            <SellButton/>
        </LinearGradient>
        
    )
}