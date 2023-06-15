import React from 'react';
import {ImageBackground, View,Text} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import AddNewButton from '../../../Components/add-new-button/AddNewButton';


import ListCard from '../../../Components/Card/BuyerCard';


import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../App';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const BuyerListScreen = () => {
    
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    return(
        <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.listcontainer}
    resizeMode="cover"
        >
            <View style={{marginBottom:30,flexDirection:'row',marginRight:200,top:10}}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{navigation.goBack()}}>
                <AntDesign name="arrowleft" size={24} color="black" />    
                <Text style={{ marginTop: 2 }}>Back</Text>
                </TouchableOpacity>
                <Text style={{left:75,fontSize:25,bottom:10}}>Buyer List</Text>
                
      </View>
            {/* card list */}
            <ListCard/>
            <AddNewButton onPress={() => {navigation.navigate("Payment")}} children={undefined} />
            </ImageBackground>
        
    )
}
