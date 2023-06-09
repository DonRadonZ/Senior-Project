import React from 'react';
import {LinkingOptions,NavigationContainer} from "@react-navigation/native";
import * as Linking from "expo-linking";
import { AppNavigator } from './app-navigation';
import { RootStackParams } from './navigator-type';

const prefix = Linking.createURL("/");
const linking: LinkingOptions<RootStackParams> = {
    prefixes: [prefix, "savebuy://"],
}

export const MainNavigator = () => {
    return(
        <NavigationContainer>

        </NavigationContainer>
    )
}