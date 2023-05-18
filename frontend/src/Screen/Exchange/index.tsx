import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Exchange } from './exchange';
import Payment from './payment';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator()
const ExchangeScreen =() => {
    const navigation = useNavigation();
        <Stack.Navigator>
            <Stack.Screen name="Exchange" component={Exchange} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>

    
}
export default ExchangeScreen;