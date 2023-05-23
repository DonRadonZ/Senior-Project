import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export const QRScanScreen = () => {
    const [hasPermission, setHasPermission] = useState<null|boolean>(null)
    const [scanned, setScanned] = useState(false)
    
    const askCameraPermission = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        console.log(status)
        if (status === 'granted') {
            setHasPermission(true)
        }
    };

    useEffect(() => { 
        
    }, []);

    return (
        
           <Text>Hello</Text>
        
    )
}