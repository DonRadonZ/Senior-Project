import { StyleSheet } from "react-native";
import { colors } from "../Colors/colors";
import { sizes } from "../fonts/fonts";
import { ScreenHeight, ScreenWidth } from "../shared";

const Buttonstyles = StyleSheet.create({
    ButtonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.navyblue,
        padding: 15,
        width: 300,
        height: "20%",
        borderRadius: 15,
        alignItems:"center",
        marginBottom: 40,
        
        
    },
    CancelButtonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.red,
        padding: 15,
        width: 200,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        marginTop:20,
        marginBottom: 40,
        
        
    },
    ReportButtonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.red,
        padding: 15,
        width: 200,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        marginTop:20,
        marginBottom: 40,
        
        
    },
    ContinueButtonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.malibu1,
        padding: 15,
        width: 200,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        marginTop:20,
        //marginBottom: 40,
        },ChooseFileButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: colors.malibu1,
        padding: 15,
        width: 200,
        height: 60,
        borderRadius: 15,
        alignItems: "center",
        marginTop:20,
        marginBottom: 200,
        },
    AddNewButtonContainer: {
        justifyContent: "center",
        backgroundColor: colors.navyblue,
        padding: 15,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems:"center",
        //marginTop: ScreenHeight*0.3,
        bottom: -200
        
        
    },ReturnButtonContainer: {
        justifyContent: "center",
        backgroundColor: colors.navyblue,
        padding: 15,
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems:"center",
        marginTop: 10,
        
        
    },
    CheckoutButtonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.orange,
        padding: 15,
        width: "25",
        height: "10%",
        borderRadius: 15,
        alignItems:"center",
        marginBottom: 20,
    },
    ProfileButtonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.malibu1,
        //padding: 15,
        width: "100%",
        height: "10%",
        //borderRadius: 15,
        alignItems:"center",
        //marginBottom: 20,
        
        
    },
    
    ChoiceText: {
        color: colors.white,
        textAlign:"center",
        fontSize: sizes.Regular,    
    },
    WaitText: {
        color: colors.white,
        textAlign:"center",
        fontSize: sizes.WaitText,    
    },

})

export default Buttonstyles