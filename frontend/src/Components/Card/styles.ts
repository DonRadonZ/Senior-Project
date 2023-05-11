import { StyleSheet } from "react-native";
import { colors } from "../Colors/colors";
import { sizes } from "../fonts/fonts";

const Balancestyles = StyleSheet.create({
    balanceContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 30,
        flexDirection: "row",
        marginHorizontal: 13,
        borderRadius: 8,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40
    },
    AmountDisplayedText: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: sizes.BankText,
        marginTop: 10,
        marginBottom: 10
    },
    BalanceText: {
        color: colors.black,
        fontSize: sizes.SmallText,    
    },
    TimeStampText: {
        color: colors.black,
        fontSize: sizes.SmallText,
    }

})

export default Balancestyles