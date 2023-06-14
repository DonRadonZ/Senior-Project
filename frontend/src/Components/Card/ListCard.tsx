import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Box,Text } from "@react-native-material/core";
import { colors } from "../Colors/colors";
import BalanceView from "./Balancestyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../App";
import Balancestyles from "./Balancestyles";
import { redA200 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";



type Props = {
  userId:string;
  name:string;
  email:string;

}

const ListCardA = ({userId,name,email}:Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
  return (
    <TouchableOpacity>
        <Box style = {Balancestyles.Buyer}>
          <View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}> 
              <View>
                <Text style={Balancestyles.Name}>{name}</Text>
                <Text>ID:{userId}</Text>
              </View>
            </View>
            <View>
              <Text>{email}</Text>
            </View>
          </View>
        </Box>
    </TouchableOpacity>
  );
}
export default ListCardA;

