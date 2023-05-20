import React from 'react';
import {ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import AddNewButton from '../../../Components/Button/AddNewButton';


import OrderCardA from '../../../Components/Card/OrderCard';
import OrderCardB from '../../../Components/Card/OrderCard';

import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../App';

const BuyList = () => {
    
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    return(
        <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
        >
            
            <OrderCardA />
            <OrderCardB />
            <AddNewButton onPress={() => {navigation.navigate("Payment")}} children={undefined} />
            </ImageBackground>
        
    )
}
export default BuyList