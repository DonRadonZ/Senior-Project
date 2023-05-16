import React from 'react';
import { ImageBackground,TouchableOpacity} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../Components/Colors/colors';
import ProfileButton from '../../Components/Button/ProfileButton';
// import MainContainer from '../../component/Container/MainContainer';

import styles from '../../Components/Container/Backgroundstyle';

export const Profile = () =>{
    return(
        <ImageBackground
      source={require("../../../assets/Background-image.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
           
            <ProfileButton onPress={()=>{}}>Add Account</ProfileButton>
            <ProfileButton onPress={()=>{}}>Notification</ProfileButton>
            <ProfileButton onPress={()=>{}}>Language Select</ProfileButton>
            <ProfileButton onPress={()=>{}}>Change Password</ProfileButton>
            
        </ImageBackground>
        
    )
}