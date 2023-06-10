import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MaterialCommunityIcons,
  FontAwesome5
} from "@expo/vector-icons";

//screen
import { HomeScreen } from "../Screen/Home/home";
import { BalanceScreen } from "../Screen/Balance/balance";
import QRScanScreen from "../Screen/QRScan/qrscan";
import { ProfileScreen } from "../Screen/Profile/profile";
import { ExchangeScreen } from "../Screen/Exchange/exchange";


const Tab = createBottomTabNavigator();

export const BottomTab =() => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          //headerTitle: Header,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color } />
    )
        
        }}
      />

      <Tab.Screen
        name="Balance"
        component={BalanceScreen}
        options={{
          headerShown: false,
          //headerTitle: Header,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" size={size} color={color } />
    )
        
        }}
      />

      <Tab.Screen
        name="QRScan"
        component={QRScanScreen}
        options={{
          headerShown: false,
          //headerTitle: Header,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode-scan" size={size} color={color } />
    )
        
        }}
      />

      <Tab.Screen
        name="Exchange"
        component={ExchangeScreen}
        options={{
          headerShown: false,
          //headerTitle: Header,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="exchange" size={size} color={color } />
    )
        
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          //headerTitle: Header,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
    )
        
        }}
      />
    </Tab.Navigator>
  );
}


