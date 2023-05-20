import { StyleSheet } from 'react-native';
import { ScreenWidth,ScreenHeight } from '../../../Components/shared';
import { colors } from '../../../Components/Colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  slipcontainer: {
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
  inputContainer: {
    marginBottom: 20,
    width: ScreenWidth * 0.8,
  },
  input: {
    height: 60,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding:15,
    paddingLeft: 65,
    paddingRight:55,
    fontSize:16,
    paddingHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: colors.orange,
    paddingVertical: 24,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 18,
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 10,
  },

});

export default styles