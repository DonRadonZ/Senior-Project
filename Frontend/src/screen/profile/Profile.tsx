import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native'; 

export const Profile = () =>{
    return(
        <View>
            <Text>Name: John Doe</Text>
            <TouchableOpacity><Text>Edit Profile</Text></TouchableOpacity>
        </View>
    )
}