import React from 'react';
import {ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import AddNewButton from '../../../Components/add-new-button/AddNewButton';


import ListCardA from '../../../Components/Card/ListCard';
import ListCardB from '../../../Components/Card/ListCardB';
import ListCardC from '../../../Components/Card/ListCardC';

import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../App';


export const BuyerListScreen = () => {
    
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    return(
        <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.listcontainer}
    resizeMode="cover"
        >
            
            <ListCardA />
            <ListCardB />
            <ListCardC/>
            <AddNewButton onPress={() => {navigation.navigate("Payment")}} children={undefined} />
            </ImageBackground>
        
    )
}
