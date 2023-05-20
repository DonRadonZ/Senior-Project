import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { requestCameraPermissionsAsync } from 'expo-camera';

const QRScan = () => {
    const [loading, setLoading] = useState(true);
    const [scanData, setScanData] = useState();
    const [permission, setPermission] = useState(true);

    useEffect(() => {
        requestCameraPermission()
    }, [])
    
    const requestCameraPermission = async () => {
        try {
            const { status, granted } = await BarCodeScanner.requestPermissionsAsync()
            console.log(`Status: ${status}, Granted: ${granted}`);
        
            if (status === 'granted') {
                console.log('Access granted');
                setPermission(true);
            } else {
                setPermission(false);
            }
        } catch (error) {
            console.error(error);
            setPermission(false);
        }

        
    }
}

