import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import Svg, {
    Path
} from 'react-native-svg';

// import {isIphoneX} from 'react-native-iphone-x-helper'

import {Home} from '../Home/Home'
import {Profile} from "../profile/Profile";
import { Transaction } from "../payment/Payment";

import Greeting from "../../component/Header/Greeting";
import { colors } from "../../component/color";
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    const navigation = useNavigation();
    return(
        <Tab.Navigator>
            <Tab.Screen
             name="Home"
             component={Home}
             options={{
                headerTitle: (props) => (
                    <Greeting
                      mainText="Hey !"
                      subText="Welcome Back"
                      {...props}
                      />
                )
             }}
             />
            {/* <Tab.Screen
             name="Scan"
             component={Home}
             /> */}
             <Tab.Screen
             name="Transaction"
             component={Transaction}
             options={{headerShown:false}}
             />
            <Tab.Screen
             name="User"
             component={Profile}
             options={{headerShown:false}}
             />
        </Tab.Navigator>

    )
}

export default Tabs