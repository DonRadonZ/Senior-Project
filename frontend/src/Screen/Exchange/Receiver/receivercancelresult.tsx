import React from "react";
import { Text, View, StyleSheet,ImageBackground, Button } from "react-native";
import { colors } from "../../../Components/Colors/colors";
import ReturnButton from "../../../Components/Button/ReturnButton";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
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

export const ReceiverCancelResultScreen = ({
  // accountNumber,
  // amount,
  // description,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
  return (
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.resultcontainer}
    resizeMode="cover"
      >
        <View style ={{top:-80,alignItems:'center'}}>
          <MaterialIcons name="cancel" size={90} color= {colors.rose} style={{marginTop:100}} />
          <Text style={{marginTop:10,marginBottom:-40,fontSize:30,color:colors.rose}}>Cancel</Text>
        </View>
      {/* <Text style={styles.confirmationText}>
        Account ID: 
      </Text>
      <Text style={styles.confirmationText}>Date:</Text>
        <Text style={styles.confirmationText}>Time: </Text> */}
        <View style={{left:130,flexDirection:"row"}}>
        {/* <TouchableOpacity style={{backgroundColor:colors.malibu2,marginRight:20,width:70,height:30,alignItems:'center',justifyContent:"center",borderRadius:5}}><Text>Evidence</Text></TouchableOpacity> */}
          <TouchableOpacity style={{backgroundColor:colors.malibu1,width:70,height:30,alignItems:'center',justifyContent:"center",borderRadius:5}}><Text>Slip</Text></TouchableOpacity>
        </View>
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
  },resultcontainer: {
    flex: 1,
    padding: 25,
    //paddingTop: 40,
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

