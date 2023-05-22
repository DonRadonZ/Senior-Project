import React from 'react';
import { ImageBackground,TouchableOpacity, View,Text} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';
import ProfileButton from '../../Components/Button/ProfileButton';
import { Avatar } from '@react-native-material/core';
// import MainContainer from '../../component/Container/MainContainer';

import styles from '../../Components/Container/Backgroundstyle';
import { ScreenWidth } from '../../Components/shared';

export const ProfileScreen = () =>{
    return(
        <ImageBackground
      source={require("../../../assets/Background-image.jpg")}
      style={styles.profilecontainer}
      resizeMode="cover"
        >
            <Avatar label="Pimlapat Nakwijit" size={75} />
            <View
                style={{
                    left: 100,
                    bottom:50
                }} 
            >
            
                
                <Text style={{ fontSize: 16 }}>Name: Pimlapat Nakwijit
                    
                </Text>
                 <Text style={{ fontSize: 16 }}> ID:708503922</Text>

            </View>

           
            <ProfileButton onPress={()=>{}}>Add Account</ProfileButton>
            <ProfileButton onPress={()=>{}}>Notification</ProfileButton>
            <ProfileButton onPress={()=>{}}>Language Select</ProfileButton>
            <ProfileButton onPress={()=>{}}>Change Password</ProfileButton>
            
        </ImageBackground>
        
    )
}