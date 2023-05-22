import React from "react";
import { Text, View, StyleSheet,ImageBackground } from "react-native";
import { colors } from "../../../Components/Colors/colors";
import ReturnButton from "../../../Components/Button/ReturnButton";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import ResultCard from "../../../Components/Card/ResultCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../../App";

interface ConfirmationPageProps {
  accountNumber: string;
  amount: string;
  description: string;
}

export const ReceiverResultScreen = ({
  // accountNumber,
  // amount,
  // description,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
  return (
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
      >
          <AntDesign name="checkcircleo" size={72} color= {colors.orange} style={{marginTop:100}} />
    
      {/* <Text style={styles.confirmationText}>
        Account ID: 
      </Text>
      <Text style={styles.confirmationText}>Date:</Text>
        <Text style={styles.confirmationText}>Time: </Text> */}
        
      <ResultCard/>
      
      <ReturnButton children={undefined} onPress={()=>{navigation.navigate(('EndUser'))}}/>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 40,
    //justifyContent: "space-between",
    alignItems: "center",
  },
  cardcontainer: {
    backgroundColor: colors.white,
    width: '100%',
    height: '50%',
    justifyContent: "center",
    marginTop: 30,
    marginBottom:350
  },
  confirmationText: {
    fontSize: 18,
    marginTop: 50,
    marginLeft:10,
    marginBottom: 30,
  },
});

