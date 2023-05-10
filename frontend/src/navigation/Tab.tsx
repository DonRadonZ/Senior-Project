import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screen
import { Home } from '../Screen/Home/home';
import { Balance } from '../Screen/Balance/balance';
import { QRScan } from '../Screen/QRScan/qrscan';
import { Exchange } from '../Screen/Exchange/exchange';
import { Profile } from '../Screen/Profile/profile';





const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{headerShown:false}}
      />

      <Tab.Screen 
      name="Balance" 
      component={Balance}
      options={{headerShown:false}} 
      />

      <Tab.Screen 
      name="QRScan" 
      component={QRScan}
      options={{headerShown:false}} 
      />

      <Tab.Screen 
      name="Exchange" 
      component={Exchange} 
      options={{headerShown:false}} 
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{headerShown:false}} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}