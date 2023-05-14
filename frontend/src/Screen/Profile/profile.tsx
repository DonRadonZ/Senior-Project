import React from 'react';
import {Text, TouchableOpacity} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';
import ProfileButton from '../../Components/Button/ProfileButton';
// import MainContainer from '../../component/Container/MainContainer';

export const Profile = () =>{
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
            <Text>Name: John Doe</Text>
            <ProfileButton onPress={()=>{}}>Add Account</ProfileButton>
            <ProfileButton onPress={()=>{}}>Notification</ProfileButton>
            <ProfileButton onPress={()=>{}}>Language Select</ProfileButton>
            <ProfileButton onPress={()=>{}}>Change Password</ProfileButton>
            
        </LinearGradient>
        
    )
}