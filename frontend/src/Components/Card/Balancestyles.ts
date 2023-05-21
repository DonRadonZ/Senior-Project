import { StyleSheet } from "react-native";
import { colors } from "../Colors/colors";
import { sizes } from "../fonts/fonts";
import { ScreenHeight, ScreenWidth } from "../shared";

const Balancestyles = StyleSheet.create({
    balanceContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        padding: 20,
        width: ScreenWidth*0.8,
        height: ScreenHeight*0.2,
        borderWidth:2,
        borderRadius: 15,
        alignItems:"flex-start",
        marginBottom: 40
    },
    orderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        padding: 20,
        width: ScreenWidth*0.8,
        height: ScreenHeight*0.1,
        borderWidth:2,
        borderRadius: 15,
        alignItems:"flex-start",
        marginBottom: 20
    },
    ResultContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.white,
        padding: 20,
        width: ScreenWidth*0.9,
        height: ScreenHeight*0.4,
        borderWidth:2,
        borderRadius: 15,
        alignItems: "flex-start",
        marginTop:20,
        marginBottom: 40
    },
    paymentContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.white,
        padding: 20,
        width: ScreenWidth*0.8,
        height: ScreenHeight*0.15,
        borderWidth:2,
        borderRadius: 15,
        alignItems:"flex-start",
        marginBottom: 40
    },
    AmountDisplayedText: {
        color: colors.black,
        fontWeight: "bold",
        textAlign:"left",
        fontSize: sizes.BankText,
        marginTop: 10,
         marginBottom: 10
    },
    OrderText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.Regular,  
    },
    OrderViewText: {
        color: colors.black,
        textAlign: "left",
        position:"relative",
        fontSize: sizes.Regular,
    },
    OrderPendingText: {
        color: colors.orange,
        textAlign: "left",
        position:"relative",
        fontSize: sizes.Regular,
    },
    OrderCompleteText: {
        color: colors.green,
        textAlign: "left",
        position:"relative",
        fontSize: sizes.Regular,
    },
    OrderCancelText: {
        color: colors.red,
        textAlign: "left",
        position:"relative",
        fontSize: sizes.Regular,
    },
    OrderTimeStampText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.Regular,
    },
    BalanceText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.SmallText, 
        marginBottom: 15
    },
    IDText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.Regular, 
        marginBottom: 50
    },DateText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.Regular, 
        marginTop: 30,
        marginBottom: 20
    },TimeText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.Regular, 
        marginTop: 50
    },
    TimeStampText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.SmallText,
    }

})

export default Balancestyles