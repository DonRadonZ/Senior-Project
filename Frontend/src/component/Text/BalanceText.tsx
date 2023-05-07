import React,{FunctionComponent} from "react";
import styled from "styled-components/native";
import { colors } from "../color";

const StyledText = styled.Text`
    fontSize: 25px;
    color: ${colors.lightgrey};
    text-align: left;
    font-family: Lato-Blold;
`;

import {TextProps} from "./types";

const BalanceText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>;
}

export default BalanceText