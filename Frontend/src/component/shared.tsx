import { Dimensions } from "react-native";
import styled from "styled-components/native";
import {colors} from "./color"
// import Constants from 'expo-constants'


export const Container = styled.View`
  flex: 1;
  align-item: center;
  background-color: ${colors.white};
`;

// export const StatusBarHeight = Constants.statusBarHeight;
export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;