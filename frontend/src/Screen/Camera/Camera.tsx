import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Alert,Text,ImageBackground } from 'react-native';
import {
    Camera,
    CameraType,
    type CameraPictureOptions,
    requestPermissionsAsync,
} from 'expo-camera';
import { AntDesign,Entypo,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { colors } from '../../Components/Colors/colors';
import { ScreenWidth } from '../../Components/shared';

export const EndConfirm = () => {
    const cameraRef = useRef<Camera>(null);
    const { navigate } = useNavigation();
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [cameraReady, setCameraReady] = useState(false);
    const [startCamera,setStartCamera] = useState(false)

    const cameraNotReady = !cameraReady || !cameraRef.current;


    const __startCamera = async () => {
        const {status} = await Camera.requestPermissionsAsync()
        console.log(status)
        if (status === 'granted') {
          setStartCamera(true)
        } else {
          Alert.alert('Access denied')
        }
      }

    const snap = async () => {
        if (cameraNotReady) {
            return;
        }
        const options: CameraPictureOptions = {
            quality: 0.5,
            skipProcessing: true,

        };
        const result = await cameraRef.current.takePictureAsync(options);
        //navigate("CheckPhoto", params);
        console.log(result)
        setPreviewVisible(true)
        setCapturedImage(true)
        
    }
    const __savePhoto = () => {}

    //retake photo
    const __retakePicture = () => {
        setCapturedImage(null)
        setPreviewVisible(false)
        __startCamera()
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
            {previewVisible && capturedImage}
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

const CameraPreview = ({photo, retakePicture, savePhoto}: any) => {
    console.log('sdsfds', photo)
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            flex: 1
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              padding: 15,
              justifyContent: 'flex-end'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <TouchableOpacity
                onPress={retakePicture}
                style={{
                  width: 130,
                  height: 40,
  
                  alignItems: 'center',
                  borderRadius: 4
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20
                  }}
                >
                  Re-take
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={savePhoto}
                style={{
                  width: 130,
                  height: 40,
  
                  alignItems: 'center',
                  borderRadius: 4
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20
                  }}
                >
                  save photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
  