import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Exchange } from './exchange';
import Payment from './payment';

const Stack =createStackNavigator()
export default function ExchangeScreen() {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Exchange" component={Exchange} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    </NavigationContainer>
    
}