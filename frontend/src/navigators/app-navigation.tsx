import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";

//authscreen
import { LoginScreen } from "../Screen/Login/login";
import { RegisterScreen } from "../Screen/Register/register";
import { RegisterMailScreen } from "../Screen/Register/registerMail";
import { RegisterIdScreen } from "../Screen/Register/registerId";
import { RegisterScanFaceScreen } from "../Screen/Register/registerScanFace";
import { RegisterVerifiedScreen } from "../Screen/Register/registerVerified";

//settingscreen


//navigation
import { RootStackParams } from "./navigator-type";
import { BottomTab } from "./bottom-tab";

//payment


//API


//ExchangeScreen


const RootStack = createNativeStackNavigator<RootStackParams>();


export const AppNavigator = () => {
    
}