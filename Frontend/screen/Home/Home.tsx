import React, {FunctionComponent} from 'react';
import {View, Text,} from "react-native";


import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { colors } from '../../component/color';
import { Container } from '../../component/shared';
import CardSection from '../Cards/CardSection';
import InfoCard from '../Balance/balance';

const HomeContainer = styled(Container)`
 background-color: ${colors.lightblue};
 justify-content: space-between;
 width: 100%;
 flex: 1;

`

export const Home:FunctionComponent= (props) => {
    // const CardsData = [{
    //     id: 1,
    //     accountNo:"3847544",
    //     balance: 20000.15,
    //     alias: "Work Debit",
        
    // }]
    return(
        <>
            
            <HomeContainer>
                <StatusBar style='dark'/>
                <InfoCard/>   
            </HomeContainer>
        </>
    )

}


