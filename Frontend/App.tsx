import React from 'react';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Welcome } from './screen/Welcome/Welcome';
import SignUp from './screen/Signup/Signup';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Landingscreen } from './screen/Landingscreen/Landingscreen';
import Tabs from './screen/navigation/tab';
import Login from './screen/Login/Login';
import { Home } from './screen/Home/Home';
import { Transaction } from './screen/payment/Payment';



export type RootStackParams = {
  SignUp: any;
  Login: any;
  Home: any;
  Scan: any;
  Profile: any;
  Welcome: any;
};



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createBottomTabNavigator<RootStackParams>();

const SelectStack = createNativeStackNavigator()

 const App = () => {
//   let [fontsLoaded] = useFonts({
//     "Lato-Bold": require("./src/component/fonts/Lato-Bold.ttf"),
//     "Lato-Regular": require("./src/component/fonts/Lato-Black.ttf")
//   })

//   if (!fontsLoaded){
//     return <AppLoading/>
//   }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
          initialRouteName={'Home'}
      >
          <Stack.Screen name="Welcome" component={Welcome} />

          <Stack.Screen name="SignUp" component={SignUp} />

         <Stack.Screen name="Login" component={Login} />
 
          {/* <Stack.Screen name="Home" component={Home} /> */}
          {/* Tabs */}
          <Stack.Screen name="Home" component={Tabs} />

      </Stack.Navigator>
          {/* Tabs */}
          {/* <Stack.Screen name="Home" component={Tabs} /> */}
    </NavigationContainer>
      
    
    // <SignUp/>
  );
};

export default App;
