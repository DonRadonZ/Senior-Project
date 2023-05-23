import React from 'react';
import {ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';


import OrderCardA from '../../../Components/Card/OrderCard';
import OrderCardB from '../../../Components/Card/OrderCardB';
import OrderCardC from '../../../Components/Card/OrderCardC';
import AddNewButton from '../../../Components/add-new-button/AddNewButton';

import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../App';


export const ReceiverListScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return(
        <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
        >
            
            <OrderCardA />
            <OrderCardB />
           <OrderCardC />
            </ImageBackground>
        
    )
}
