import React from "react";
import { Camera } from "expo-camera";
import * as FaceDetector from 'expo-face-detector';

const FaceCheck = () => {
    <Camera
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorLandmarks.none,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassification: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 100,
            tracking:true
        }}
        
    />
}

const handleFacesDetected = () => {
  console.log();
};

export default FaceCheck