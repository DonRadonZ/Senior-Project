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

//buyer
import { ListScreen } from "../Screen/Exchange/Buyer/buyerlist";
import { PaymentScreen } from "../Screen/Exchange/Buyer/payment";
import { BuyerConfirmationScreen } from "../Screen/Exchange/Buyer/confirmation";
import { ReConfirmationScreen } from "../Screen/Exchange/Buyer/reconfirm";
import { BuyerResultScreen } from "../Screen/Exchange/Buyer/buyerresult";
import { BuyerReportScreen } from "../Screen/Exchange/Buyer/buyerreport";
import { BuyerStatusScreen } from "../Screen/Exchange/Buyer/buyerstatus";



//receiver


//API





const RootStack = createNativeStackNavigator<RootStackParams>();


export const AppNavigator = () => {
    <>
        <RootStack.Screen
            options={{ headerShown: false }}
            name="Tab"
            component={BottomTab}
        />
    </>
}