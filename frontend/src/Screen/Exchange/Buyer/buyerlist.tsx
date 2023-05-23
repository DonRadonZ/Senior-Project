import React from 'react';
import {ImageBackground, View,Text} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import AddNewButton from '../../../Components/add-new-button/AddNewButton';


import ListCardA from '../../../Components/Card/ListCard';
import ListCardB from '../../../Components/Card/ListCardB';
import ListCardC from '../../../Components/Card/ListCardC';

import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../App';
import { AntDesign } from '@expo/vector-icons';


export const BuyerListScreen = () => {
    
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    return(
        <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.listcontainer}
    resizeMode="cover"
        >
            <View style={{marginBottom:50,flexDirection:'row',marginRight:200}}>
                <AntDesign name="arrowleft" size={24} color="black" />    
                <Text style={{ marginTop: 3 }}>Back</Text>
                <Text style={{left:75,top:4,fontSize:25,bottom:20}}>Buyer List</Text>
      </View>
            <ListCardA />
            <ListCardB />
            <ListCardC/>
            <AddNewButton onPress={() => {navigation.navigate("Payment")}} children={undefined} />
            </ImageBackground>
        
    )
}
