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
    ProfileButtonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.navyblue,
        padding: 15,
        width: "100%",
        height: "10%",
        borderRadius: 15,
        alignItems:"center",
        marginBottom: 20,
        
        
    },
    
    ChoiceText: {
        color: colors.white,
        textAlign:"center",
        fontSize: sizes.Regular,    
    },
    

})

export default Buttonstyles