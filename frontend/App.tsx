import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screen
import { LoginScreen } from "./src/Screen/Login/login";
import { RegisterScreen } from "./src/Screen/Register/register";
import { HomeScreen } from "./src/Screen/Home/home";
import { BalanceScreen } from "./src/Screen/Balance/balance";
import { QRScanScreen } from "./src/Screen/QRScan/qrscan";
import { ExchangeScreen } from "./src/Screen/Exchange/exchange";

import { ProfileScreen } from './src/Screen/Profile/profile';
import {PaymentScreen} from './src/Screen/Exchange/Buyer/payment';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './src/Components/Colors/colors';
import {ConfirmationScreen} from './src/Screen/Exchange/Buyer/confirmation';
import {ReceiverSentFileScreen} from './src/Screen/Exchange/Receiver/SentPic';
import {ListScreen} from "./src/Screen/Exchange/Buyer/buyerlist";
import {ReceiverListScreen} from "./src/Screen/Exchange/Receiver/receiverlist";
import {ReceiverResultScreen} from "./src/Screen/Exchange/Receiver/receiverresult";
import { EndConfirm } from "./src/Screen/Camera/Camera";
import RegisterSuccess from "./src/Screen/Register/successstatus";
import { SetOTP } from "./src/Screen/setOTP/otp";
import { VerifiedOTP } from "./src/Screen/setOTP/verifiedotp";
import { RegisterVerifiedScreen } from "./src/Screen/Register/registerVerified";
import { Wait } from "./src/Screen/Status/waitstatus";
import {BuyerStatusScreen} from "./src/Screen/Exchange/Buyer/buyerstatus";
import {BuyerReportScreen} from "./src/Screen/Exchange/Buyer/buyerreport";


//icon
import { FontAwesome5 } from "@expo/vector-icons";
import { RegisterMailScreen } from "./src/Screen/Register/registerMail";
import { RegisterIdScreen } from "./src/Screen/Register/registerId";
import { RegisterScanFaceScreen } from "./src/Screen/Register/registerScanFace";
import { Unlock } from "./src/Screen/Unlock/Unlock";
import {BuyerSlipScreen} from "./src/Screen/Exchange/Buyer/buyerslip";
import {ReceiverSlipScreen} from "./src/Screen/Exchange/Buyer/receiverslip";
import {BuyerResultScreen} from "./src/Screen/Exchange/Buyer/buyerresult";
import { ReConfirmationScreen } from "./src/Screen/Exchange/Buyer/reconfirm";
import { ReceiverReportScreen } from "./src/Screen/Exchange/Receiver/receiverreport";

export type RootStackParams = {
  Home: any;
  Exchange: any;
  Buyer: any;
  Payment: any;
  Confirmation: any;
  EndUser: any;
  EndOrder: any;
  EndUserFile: any;
  MainPage: any;
  MyRegister: any;
  MyRegisterMail: any;
  MyRegisterId: any;
  MyRegisterScanFace: any;
  RegisterSuccess:any,
  MyLogin:any;
  ReceiverPage: any;
  MySlip: any;
  ReceiverSlip: any;
  Report: any;
  BuyerResult: any;
  ReConfirm: undefined;
};

const RootStack = createStackNavigator<RootStackParams>();
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyLogin() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
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
        component={RegisterScreen}
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
        component={RegisterMailScreen}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function MyRegisterId() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="RegisterId"
        component={RegisterIdScreen}
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
        component={RegisterScanFaceScreen}
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

function MysetOTP() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tab.Screen
        name="setOTP"
        component={SetOTP}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} />,
          }}/>
      <Tab.Screen name="Balance" component={BalanceScreen} options={{headerShown:false,
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="wallet" color={color} size={size} />,}} />
      <Tab.Screen name="QRScan" component={EndConfirm
      }options={{headerShown:false,
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="qrcode" color={color} size={size} />,
      }} />
      <Tab.Screen name="Exchange" component={ExchangeScreen} 
      options={{headerShown:false,
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="exchange-alt" color={color} size={size} />,
      }} 
      />
      {/* <RootStack.Screen name="Payment" component={Payment} options={{headerShown:false}} /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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
      <Stack.Screen name='Payment' component={PaymentScreen} />
      <Stack.Screen name="BuyList" component={ListScreen} />
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTab">
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
          name="MyRegisterVerified"
          component={RegisterVerifiedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterSuccess"
          component={RegisterSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Unlock"
          component={Unlock}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="setOTP"
          component={SetOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPverified"
          component={VerifiedOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainPage"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Wait" component={Wait} />
        <Stack.Screen name="Buyer" component={ListScreen} />
        <Stack.Screen name="EndUser" component={ReceiverListScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="EndOrder" component={ReceiverResultScreen} />
        <Stack.Screen name="ReceiverPage" component={BuyerStatusScreen} />
        <Stack.Screen name="EndUserFile" component={ReceiverSentFileScreen} />
        <Stack.Screen name="MySlip" component={BuyerSlipScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReceiverSlip" component={ReceiverSlipScreen}/>
        <Stack.Screen name="Report" component={BuyerReportScreen} />
        <Stack.Screen name="BuyerResult" component={BuyerResultScreen} />
        <Stack.Screen name="ReConfirm" component={ReConfirmationScreen} />
        <Stack.Screen name="ReceiveReport" component={ReceiverReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
