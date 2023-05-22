import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { Avatar } from '@react-native-material/core'


export const ProfileHeader = () => {
    <View style={{ paddingHorizontal: 3 }}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
            <Avatar label="Pimlapat Nakwijit" size={20} color='green' />
            <Text style={{fontFamily:"bold"}}>Profile</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:"bold"}}>Pimlapat Nakwijit</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:"bold"}}>ID: 708503922</Text>
        </View>
    </View>
}