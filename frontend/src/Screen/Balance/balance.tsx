import React from 'react';
import {Text, TouchableOpacity} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';

import BalanceCard from '../../Components/Card/BalanceCard';

export const Balance = () =>{
    return(
        <LinearGradient
            colors={[colors.malibu1,colors.malibu2]}
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems:'center'
            }}
            >
            <BalanceCard/>
            </LinearGradient>
        
    )
}