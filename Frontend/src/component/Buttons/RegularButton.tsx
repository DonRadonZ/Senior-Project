import React,{FunctionComponent} from "react";
import styled from 'styled-components/native';
import { colors } from "../color";
import RegularText from "../Text/RegularText";

const ButtonView = styled.TouchableOpacity`
 background-color: ${colors.lightblue};
 width: 100%;
 height: 60px;
 padding: 15px;
 border-radius: 15px;
 justify-content:center;
 align-items:center;
`

import {ButtonProps} from './types';

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return <ButtonView onPress={props.onPress} style={props.style}><RegularText>{props.children}</RegularText></ButtonView>

}

export default RegularButton;