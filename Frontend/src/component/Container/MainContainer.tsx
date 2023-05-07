import React,{FunctionComponent} from "react";
import styled from 'styled-components/native';
import { colors } from "../color";

const StyledView = styled.View`
 flex: 1;
 padding: 25px;
 padding-top: 40px;
 background-color: ${colors.bluesky};
 justify-content: center;
 align-items: center;
`

import {ContainerProps} from './types';

const MainContainer: FunctionComponent<ContainerProps> = (props) => {
    return <StyledView style={props.style}>{props.children}</StyledView>

}

export default MainContainer