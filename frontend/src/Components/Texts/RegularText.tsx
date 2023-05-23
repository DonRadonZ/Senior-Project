import React,{FunctionComponent} from "react";
import { Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";





import {TextProps} from "./types";

const RegularText: FunctionComponent<TextProps> = (props) => {
    return <Text style={{fontSize:25,marginBottom:15,marginRight:180}}>{props.children}</Text>;
}

export default RegularText