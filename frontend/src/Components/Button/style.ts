import { StyleSheet } from "react-native";
import { colors } from "../Colors/colors";
import { sizes } from "../fonts/fonts";
import { ScreenHeight, ScreenWidth } from "../shared";

const Buttonstyles = StyleSheet.create({
    ButtonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.malibu1,
        padding: 15,
        width: 300,
        height: "20%",
        borderRadius: 15,
        alignItems:"center",
        marginBottom: 40,
        
        
    },
    ChoiceText: {
        color: colors.black,
        textAlign:"left",
        fontSize: sizes.SmallText,    
    },
    

})

export default Buttonstyles