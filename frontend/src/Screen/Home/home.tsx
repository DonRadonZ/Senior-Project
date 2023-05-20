import React from 'react';
import {ImageBackground,StyleSheet,SafeAreaView} from 'react-native'; 
import { Text } from "@react-native-material/core";
import RegularText from '../../Components/Texts/RegularText';
// import MainContainer from '../../component/Container/MainContainer';
//import styles from '../../Components/Container/Backgroundstyle';
import ServiceLists from "../../Components/List/ServiceList"
import services from "../../mock/services.json"
import { useNavigation } from '@react-navigation/native';
import { Service } from '../../../App';
export const Home = () => {
  
    return(
        <ImageBackground
        source={require("../../../assets/Background-image.jpg")}
        style={{flex:1}}
        resizeMode="cover"
      >
        <SafeAreaView>
          <RegularText>Friend List</RegularText>

          <RegularText>Service</RegularText>
          <ServiceLists onPress={()=>{}} list={services}/>
          <RegularText>Notification</RegularText>
        </SafeAreaView>
                
             </ImageBackground>
                
            
        
    )
}
