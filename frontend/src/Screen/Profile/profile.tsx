import React from 'react';
import { ImageBackground,TouchableOpacity, View,Text} from 'react-native'; 

import ProfileButton from '../../Components/Button/ProfileButton';
import { ProfileHeader } from './profile-header';
import { Avatar } from '@react-native-material/core';

import styles from '../../Components/Container/Backgroundstyle';
import { ScreenWidth } from '../../Components/shared';

export const ProfileScreen = () =>{
    return(
        <ImageBackground
      source={require("../../../assets/Background-image.jpg")}
      style={styles.profilecontainer}
      resizeMode="cover"
        >
        <View style={{ paddingHorizontal: 10 ,flexDirection:"row" }}>
        <View style={{flexDirection:'column',
        alignItems:'center',
        paddingHorizontal:20,
        marginBottom: 30
        }}>
            <Avatar label="Pimlapat Nakwijit" size={80} color='green' />
            <Text style={{fontSize:20}}>Profile</Text>
        </View>
        <View style={{alignItems:'stretch',paddingHorizontal:40,paddingVertical:25}}>
            <Text style={{fontSize:20}}>Pimlapat Nakwijit</Text>
            <Text style={{fontSize:20}}>ID: 708503922</Text>
        </View>
        </View>

           
            <ProfileButton onPress={()=>{}}>Add Account</ProfileButton>
            <ProfileButton onPress={()=>{}}>Notification</ProfileButton>
            <ProfileButton onPress={()=>{}}>Language Select</ProfileButton>
            <ProfileButton onPress={()=>{}}>Change Password</ProfileButton>
            
        </ImageBackground>
        
    )
}