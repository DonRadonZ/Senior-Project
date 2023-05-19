import React,{FunctionComponent, useState} from 'react';
import {TouchableOpacity,ImageBackground,Button,Image} from 'react-native'; 
// import MainContainer from '../../component/Container/MainContainer';
import { Text } from '@react-native-material/core';
import { colors } from '../../../Components/Colors/colors';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../../../Components/Container/Backgroundstyle';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
//import { IStackScreenProps } from '../../Components/library/StackScreenProps';
import * as ImagePicker from 'expo-image-picker'

import 'react-native-gesture-handler'

//screen
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../../App';


export declare type ImageInfo = {
    uri: string;
    width: number;
    height: number;
    type?: 'image' | 'video';
    exif?: {
        [key: string]: any;
    };
    base64?: string;
};



const Stack = createStackNavigator()





export const ReceiptTransfer:FunctionComponent<ImageInfo> = ({uri}) => {
  
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    
    const [image, setImage] = useState(null)
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
            aspect: [4,3]
        });
         if (!result.canceled) {
            //setImage(result.assets[0].uri)
    }
  };
  

  return(
    <ImageBackground
    source={require("../../../../assets/Background-image.jpg")}
    style={styles.container}
    resizeMode="cover"
    >
    <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      
      
      </ImageBackground>
    
      
  )
}