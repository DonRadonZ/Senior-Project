import React, { FunctionComponent } from 'react';
import {
    View, 
    Text
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { colors } from '../../component/color';
import { Container } from '../../component/shared';
import BigText from '../../component/Text/Bigtext';
import SmallText from '../../component/Text/SmallText';

 

const WelcomeContainer = styled(Container)`
 background-color: ${colors.secondary};
 justify-content: space-between;
 width: 100%;
 height: 100%;

`
const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`

const BottomSection = styled.View`
  width:100%;
  padding: 25px;
  flex: 1;
`

export const Welcome:FunctionComponent= () => {
    return(
        <>
            <StatusBar style='light'/>
            <WelcomeContainer>
                <TopSection>
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{width: "70%", marginBottom: 25}}>Best way to spend your money</BigText>
                    <SmallText textStyles={{width: "70%", marginBottom: 25}}>Best payment method for use money and safe buying</SmallText>
                </BottomSection>
                
            </WelcomeContainer>
        </>
    )

}

