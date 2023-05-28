import React from 'react';
import {ImageBackground, View,Text,TouchableOpacity} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';


import OrderCardA from '../../../Components/Card/OrderCard';
import OrderCardB from '../../../Components/Card/OrderCardB';
import OrderCardC from '../../../Components/Card/OrderCardC';
import AddNewButton from '../../../Components/add-new-button/AddNewButton';

import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../App';
import { AntDesign } from '@expo/vector-icons';


export const ReceiverListScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return(
        <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
        >
            <View style={{marginBottom:50,flexDirection:'row',marginRight:190}}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{navigation.goBack()}}>
                <AntDesign name="arrowleft" size={24} color="black" />    
                <Text style={{ marginTop: 2 }}>Back</Text>
                </TouchableOpacity>
                <Text style={{left:70,top:4,fontSize:25,bottom:20}}>Receiver List</Text>
      </View>
            
            {/* request list */}
            <OrderCardA />
            <OrderCardB />
           <OrderCardC />
            </ImageBackground>
        
    )
}
