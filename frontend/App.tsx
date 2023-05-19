import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screen
import { Login } from "./src/Screen/Login/login";
import { Register } from "./src/Screen/Register/register";
import { Home } from "./src/Screen/Home/home";
import { Balance } from "./src/Screen/Balance/balance";
import { QRScan } from "./src/Screen/QRScan/qrscan";
import { Exchange } from "./src/Screen/Exchange/Buyer/exchange";
//import ExchangeScreen from './src/Screen/Exchange';
import { Profile } from './src/Screen/Profile/profile';
import Payment from './src/Screen/Exchange/Buyer/payment';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './src/Components/Colors/colors';
import ConfirmationPage from './src/Screen/Exchange/Buyer/confirmation';
import EndUserfile from './src/Screen/Exchange/EndUser/SentPic';



//icon
import { FontAwesome5 } from "@expo/vector-icons";
import { registerMail } from "./src/Screen/Register/registerMail";
import { registerId } from "./src/Screen/Register/registerId";
import { registerScanFace } from "./src/Screen/Register/registerScanFace";
import { Unlock } from "./src/Screen/Unlock/Unlock";

export type RootStackParams = {
  Exchange: any;
  Payment: any;
  Confirmation: any;
};

const RootStack = createStackNavigator<RootStackParams>();
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyLogin() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function MyRegister() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function MyRegisterMail() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="RegisterMail"
        component={registerMail}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function MyRegisterId() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="RegisterMail"
        component={registerId}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function MyRegisterScanFace() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="registerScanFace"
        component={registerScanFace}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function MyUnlock() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="Unlock"
        component={Unlock}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} />,
          }}/>
      <Tab.Screen name="Balance" component={Balance}options={{headerShown:false,
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="wallet" color={color} size={size} />,}} />
      <Tab.Screen name="QRScan" component={EndUserfile
      }options={{headerShown:false,
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="qrcode" color={color} size={size} />,
      }} />
      <Tab.Screen name="Exchange" component={Exchange} 
      options={{headerShown:false,
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="exchange-alt" color={color} size={size} />,
      }} 
      />
      {/* <RootStack.Screen name="Payment" component={Payment} options={{headerShown:false}} /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Service(){
  return (
    <Stack.Navigator>
        <Stack.Screen name='Payment' component={Payment} />
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Unlock">
        <Stack.Screen
          name="MyLogin"
          component={MyLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyRegister"
          component={MyRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyRegisterMail"
          component={MyRegisterMail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyRegisterId"
          component={MyRegisterId}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyRegisterScanFace"
          component={MyRegisterScanFace}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Unlock"
          component={Unlock}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTab"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Confirmation" component={ConfirmationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
