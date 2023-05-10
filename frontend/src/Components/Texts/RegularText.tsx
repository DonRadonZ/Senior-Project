import React,{FunctionComponent} from "react";
import { Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";





import {TextProps} from "./types";

const RegularText: FunctionComponent<TextProps> = (props) => {
    return <Text style={props.textStyles}>{props.children}</Text>;
}

export default RegularText