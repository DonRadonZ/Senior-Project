import React, { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
    Camera,
    CameraType,
    type CameraPictureOptions,
    requestPermissionsAsync,
} from 'expo-camera';
import { AntDesign,Entypo,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { colors } from '../../../Components/Colors/colors';
import { ScreenWidth } from '../../../Components/shared';

export const ReceiverSentFileScreen = () => {
    const cameraRef = useRef<Camera>(null);
    const { navigate } = useNavigation();
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [cameraReady, setCameraReady] = useState(false);

    const cameraNotReady = !cameraReady || !cameraRef.current;

    const snap = async () => {
        if (cameraNotReady) {
            return;
        }
        const options: CameraPictureOptions = {
            quality: 0.5,
            skipProcessing: true,

        };
        const result = cameraRef.current.takePictureAsync(options);
        //navigate("CheckPhoto", params);
    }

    const ImageGallery = async () => {
        const { assets } = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.All,
            allowsMultipleSelection: false,
            
        });
        if (!assets || !(assets.length > 0)) {
            return;
        }
         const params: { image?: string; images?: string[]; video?: string } = {};
        if (assets.length === 1) {
            const field = assets[0].type?.startsWith("video") ? "video" : "image";
           params[field] = assets[0].uri;
             } else if (assets.length > 1) {
               params.images = assets.map((asset) => asset.uri);
             }
             //navigate("CreatePost", params);
         };
             
    

    if (!permission?.granted) {
        requestPermission();
        console.log(permission?.granted);
    }

    const toggleCameraType = () => {
        setCameraType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.black }}>
            <Camera
                ref={cameraRef}
                style={{ flex: 1 }}
                type={cameraType}
                ratio="4:3"
                onCameraReady={() => {
                    setCameraReady(true);
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: ScreenWidth,
                    alignItems: 'flex-start',
            }}
            >
            <AntDesign name="close" size={30} color={colors.white} />
            </View>
            <View
                style={{
                    position: 'absolute',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: ScreenWidth,
                    bottom: 12,
                    alignItems: 'center',
            }}    
            >
                <TouchableOpacity onPress={ImageGallery}>
                    <Entypo name="image" size={30} color={colors.white} />
                </TouchableOpacity>
                {cameraReady && (
                    <TouchableOpacity
                        onPress={snap}
                        style={{
                            backgroundColor: colors.white,
                            width: 60,
                            height: 60,
                            borderRadius:30
                            }}
                    />
                )}
                <TouchableOpacity onPress={toggleCameraType}>
                    <Ionicons name='ios-camera-reverse' size={30} color={colors.white} />
                </TouchableOpacity>
            </View>
         </View>
    )
}