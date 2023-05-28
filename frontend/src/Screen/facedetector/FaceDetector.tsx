import React from "react";
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from 'expo-face-detector';

export const FaceCheck = () => {


    return(
        <Camera
            style={{ flex: 1 }}
            type={CameraType.front}
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorLandmarks.none,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassification: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 100,
            tracking:true
        }}
    
        />
    )
}

const handleFacesDetected = () => {
  console.log();
};

