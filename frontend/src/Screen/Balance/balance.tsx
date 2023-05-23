import React from 'react';
import {ImageBackground} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';


import BalanceCard from '../../Components/Card/BalanceCard';

import styles from '../../Components/Container/Backgroundstyle';
export const BalanceScreen = () =>{
    return(
        <ImageBackground
    source={require("../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
  >
            <BalanceCard/>
            </ImageBackground>
        
    )
}