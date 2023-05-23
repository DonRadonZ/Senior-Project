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
            <View style={{ paddingHorizontal: 3 }}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
            <Avatar label="Pimlapat Nakwijit" size={20} color='green' />
            <Text style={{fontFamily:"bold"}}>Profile</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:"bold"}}>Pimlapat Nakwijit</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:"bold"}}>ID: 708503922</Text>
        </View>
        </View>

           
            <ProfileButton onPress={()=>{}}>Add Account</ProfileButton>
            <ProfileButton onPress={()=>{}}>Notification</ProfileButton>
            <ProfileButton onPress={()=>{}}>Language Select</ProfileButton>
            <ProfileButton onPress={()=>{}}>Change Password</ProfileButton>
            
        </ImageBackground>
        
    )
}