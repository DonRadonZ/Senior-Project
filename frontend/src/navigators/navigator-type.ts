
import {
    CompositeScreenProps,
    NavigatorScreenParams
} from "@react-navigation/native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Timestamp } from "firebase/firestore"

export type RootStackParams = {
    Tab: NavigatorScreenParams<BottomTabTypes>

    //Buyer Part
    Buyer: {listId:number; name:string; email:string; createdAt:Timestamp; amount:number; status:string; }
    Payment: {accountId:string; amount:number; note:string;}
    Confirmation:{accountId:string; amount:number; note:string;} | undefined;
    Getstatus:{accountId:string; amount:number; note:string;}
    BuyerWait: undefined;
    BuyerSlip: undefined;
    Reconfirm: undefined;
    BuyerReport: undefined;
    BuyerStatus: undefined;
    BuyerResult: undefined;



    // Receiver part
    Receiver: {listId:number; name:string; email:string; createdAt:Timestamp; amount:number;}
    ReceiverSlip: undefined;
    ReceiverReport: undefined;
    ReceiverSentSlip: undefined;
    ReceiverResult: undefined;
    ReceiverWait: undefined;




}

export type RootStackScreenProps<T extends keyof RootStackParams> =
    NativeStackScreenProps<RootStackParams, T>;

export type BottomTabTypes = {
    Home: undefined;
    Balance: undefined;
    QRScan: undefined;
    Exchange: undefined;
    Profile: {
        id:string
    } | undefined;
}

export type AuthStackType = {
    Login: undefined;
    Signup: undefined;
    SignupEmail: undefined;
    SignupId: undefined;
    SignupFace: undefined;
    ConfirmEmail: { email?: string };
    ForgotPassword: undefined;
    NewPassword: undefined;

}

export type typeBottomTabNavigationProps<T extends keyof BottomTabTypes> = 
    CompositeScreenProps<
        BottomTabScreenProps<BottomTabTypes, T>,
        RootStackScreenProps<keyof RootStackParams>
    >;

type AllStackParamList = RootStackParams & BottomTabTypes;
declare global {
    namespace ReactNavigation{
        interface RootStackParams extends AllStackParamList {}
    }
}