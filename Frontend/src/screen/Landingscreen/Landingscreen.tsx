import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export const Landingscreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text> navigation </Text>
            </View>
            <View style={styles.body}>
                <Text> Landingscreen </Text>
            </View><View style={styles.footer}>
                <Text> sidebar </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',
    },
    navigation:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    body: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan',
    },

});
