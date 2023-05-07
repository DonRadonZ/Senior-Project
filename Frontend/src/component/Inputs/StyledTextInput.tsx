import React,{FunctionComponent} from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../color';
import SmallText from '../Text/SmallText';

const InputWrapper = styled.View`
    width: 100%;
`

const LeftIcon = styled.View`
 position: absolute;
 top: 35px;
 left: 15px;
 z-index: 1;
 border-right-width: 2px;
 border-color: ${colors.lightblue};
 padding-right: 10px;
`

const InputField = styled.TextInput`
 background-color: ${colors.bluesky};
 height: 60px;
 border-width: 2px;
 border-radius: 10px;
 border-color: ${colors.ebony}
 margin-veritcal: 3px;
 margin-bottom: 10px;
 padding: 15px;
 padding-left: 65px;
 padding-right: 55px;
 font-size: 16px;
 color: ${colors.black}


`

import { InputProps } from './types';

const StyledTextInput: FunctionComponent<InputProps> = ({label,...props}) => {
    return( 
    <InputWrapper >
            {/* <LeftIcon>
                <MaterialCommunityIcons name = {icon} size={30} colors={colors.black} />
            </LeftIcon> */}
            <SmallText>{label}</SmallText>
            <InputField {...props} placeholderTextColor={colors.gray} style={props.style}/>
    </InputWrapper>
    )
}

export default StyledTextInput