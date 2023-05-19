import React from 'react';
import {ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';


import OrderCardA from '../../../Components/Card/OrderCard';
import OrderCardB from '../../../Components/Card/OrderCard';

import styles from '../../../Components/Container/Backgroundstyle';
export const BuyOrder = () =>{
    return(
        <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
        >
            
            <OrderCardA />
            <OrderCardB/>
            </ImageBackground>
        
    )
}