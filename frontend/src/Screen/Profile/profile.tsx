import React from 'react';
import {Text, TouchableOpacity} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';
// import MainContainer from '../../component/Container/MainContainer';

export const Profile = () =>{
    return(
        <LinearGradient
        colors={[colors.malibu1,colors.malibu2]}
        style={{
            flex:1,
            justifyContent: 'center',
            alignItems:'center'
        }}
        >
            <Text>Name: John Doe</Text>
        </LinearGradient>
        
    )
}