import React,{FunctionComponent} from 'react';

//styled component
import styled from 'styled-components/native';
import { ScreenHeight,
    //StatusBarHeight
    ScreenWidth } from '../../component/shared';
import { colors } from '../../component/color';
import RegularText from '../../component/Text/RegularText';
import BalanceText from '../../component/Text/BalanceText';
//import SmallText from '../../component/Text/SmallText';

import { BalanceProps } from './types';

const CardView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //width: ${ScreenWidth*0.75}px;
    height: ${ScreenHeight * 0.15}px;
    background-color: ${colors.bluesky};
    border-width: 2px;
    border-color: ${colors.lightgrey};
    padding: 20px;
    border-radius: 15px;
    overflow: hidden;
    elevation: 5;
    shadow-color:${colors.black};
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;

`

const CardSection = styled.View`
     justify-content: space-between;
     align-items: flex-start;
`

const PayCard:FunctionComponent =(props) => {
    return <CardView {...props}>
        <CardSection style={{width: '60%'}}>
            <RegularText>Balance</RegularText>
            <BalanceText>999,999</BalanceText>
        </CardSection>
        <CardSection style={{width: '40%'}}>
            
        </CardSection>
    </CardView>;
}

export default PayCard