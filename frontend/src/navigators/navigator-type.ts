
import {
    CompositeScreenProps,
    NavigatorScreenParams
} from "@react-navigation/native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

export type RootStackParams = {
    Tab: NavigatorScreenParams<BottomTabTypes>
}

export type RootStackScreenProps<T extends keyof RootStackParams> =
    NativeStackScreenProps<RootStackParams, T>;

export type BottomTabTypes = {
    Home: undefined,
    Balance: undefined,
    QRScan: undefined,
    Exchange: undefined,
    Profile: undefined,
}

export type AuthStackType = {
    Login: undefined,
    Signup: undefined,
    ConfirmEmail: { email?: string },
    ForgotPassword: undefined,
    NewPassword: undefined,

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