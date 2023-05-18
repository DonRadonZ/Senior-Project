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
        textAlign:"right",
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
    },
    TimeStampText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.SmallText,
    }

})

export default Balancestyles