import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../Components/Colors/colors';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library'


export default function UseCamera(this: any) {
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [preview, setIsPreview] = useState(false);

  const cameraRef = useRef(null);




  const onCameraReady = () => {
  setIsCameraReady(true);
  };




  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  // const snap = async () => {
  //   if (cameraRef) {
  //     const data = await cameraRef.current.takePictureAsync();
  //     console.log(data);
  //   }
    
  // }


  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Ionicons name="camera-reverse" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} disabled={!isCameraReady} onPress={()=>{}}
          >
            <Ionicons name="camera" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
