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
import { BuyerListScreen } from "../Screen/Exchange/Buyer/buyerlist";
import { PaymentScreen } from "../Screen/Exchange/Buyer/payment";
import { BuyerConfirmationScreen } from "../Screen/Exchange/Buyer/confirmation";
import { ReConfirmationScreen } from "../Screen/Exchange/Buyer/reconfirm";
import { BuyerWaitScreen } from "../Screen/Exchange/Buyer/buyerwait";
import { BuyerResultScreen } from "../Screen/Exchange/Buyer/buyerresult";
import { BuyerReportScreen } from "../Screen/Exchange/Buyer/buyerreport";
import { BuyerStatusScreen } from "../Screen/Exchange/Buyer/buyerstatus";
import { BuyerSlipScreen } from "../Screen/Exchange/Buyer/buyerslip";


//receiver
import { ReceiverListScreen } from "../Screen/Exchange/Receiver/receiverlist";
import { ReceiverSlipScreen } from "../Screen/Exchange/Buyer/receiverslip";
import { ReceiverReportScreen } from "../Screen/Exchange/Receiver/receiverreport";
import { ReceiverResultScreen } from "../Screen/Exchange/Receiver/receiverresult";
import { ReceiverSentSlipScreen } from "../Screen/Exchange/Receiver/receiverslip";
import { ReceiverWaitScreen } from "../Screen/Exchange/Receiver/receiverwait";

//API





const RootStack = createNativeStackNavigator<RootStackParams>();


export const AppNavigator = () => {
    <>
        <RootStack.Screen
            options={{ headerShown: false }}
            name="Tab"
            component={BottomTab}
        />
        {/* Buyer Part */}
        <RootStack.Screen name="Buyer" component={BuyerListScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="Payment" component={PaymentScreen} />
        <RootStack.Screen name="Confirmation" component={BuyerConfirmationScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="BuyerWait" component={BuyerWaitScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="BuyerSlip" component={BuyerSlipScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="Reconfirm" component={ReConfirmationScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="BuyerReport" component={BuyerReportScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="BuyerStatus" component={BuyerStatusScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="BuyerResult" component={BuyerResultScreen} options={{ headerShown: false }}/>

        {/* Receiver Part */}
        <RootStack.Screen name="Receiver" component={ReceiverListScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="ReceiverSlip" component={ReceiverSlipScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="ReceiverReport" component={ReceiverReportScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="ReceiverSentSlip" component={ReceiverSentSlipScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="ReceiverResult" component={ReceiverResultScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="ReceiverWait" component={ReceiverWaitScreen} options={{ headerShown: false }} />
    </>

}