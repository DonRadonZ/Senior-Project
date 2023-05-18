import React, {useState,useEffect}  from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StyleSheet
} from "react-native";

import LinearGradient from "react-native-linear-gradient"
import Icon from 'react-native-vector-icons/AntDesign';

import axios from 'axios';

import { colors } from '../../Components/Colors/colors';
import { sizes,fonts } from '../../Components/fonts/otherfonts';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


// type authScreenNavigationType=StackNavigationProp<>


const Login = () => {
    const navigation = useNavigation();
    const [showPassword, setshowPassword] = React.useState(false)

    const [area,setArea] = React.useState([])
    const [selectedArea, setSelectedArea] = React.useState(null)
    const[modalVisible, setModalVisible] = React.useState(false)

    React.useEffect(() =>{
        const countryUrl = 'https://restcountries.com/v3.1/all';
        axios.get(countryUrl)
    })

    function renderHeader(){
        return(
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: sizes.padding *6 ,
                    paddingHorizontal: sizes.padding *2
                }}
                onPress={() => console.log("Sign up")}
            >
                <Icon 
                    name='arrowleft'
                    size={20}
                    color= {colors.white}
                />
                <Text style={{ marginLeft: sizes.padding * 1.5,color: colors.black,
                ...fonts.h4}}>Sign Up</Text>
            </TouchableOpacity>
        )
    }

    function renderForm(){
        return(
            <View
                style={{
                    marginTop: sizes.padding * 3,
                    marginHorizontal: sizes.padding * 3,
                }}
            >
                
                {/* Username */}
                <View style={{marginTop:sizes.padding *2}}>
                    <Text style={{color:colors.black,...fonts.body3}}>Username</Text>
                    <TextInput 
                        style={{
                            marginVertical: sizes.padding,
                            borderBottomColor: colors.black,
                            borderBottomWidth: 1,
                            height: 40,
                            color: colors.black,
                            ...fonts.body3
                            
                        }}
                        placeholder="Enter your username"
                        placeholderTextColor={colors.black}
                        selectionColor={colors.black}
                    />
                </View>
                {/* Password */}
                <View style={{marginTop:sizes.padding * 2}}>
                    <Text style={{color:colors.black,...fonts.body3}}>Password</Text>
                    <TextInput 
                        style={{
                            marginVertical: sizes.padding,
                            borderBottomColor: colors.black,
                            borderBottomWidth: 1,
                            height: 40,
                            color: colors.black,
                            ...fonts.body3
                            
                        }}
                        placeholder="Enter your password"
                        placeholderTextColor={colors.black}
                        selectionColor={colors.black}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 10,
                            height: 30,
                            width: 30
                        }}
                        onPress={() => setshowPassword(!showPassword)}
                    >
                    <Icon 
                    name='eye'
                    size={20}
                    color= {colors.black}
                    />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderButton() {
        return(
            <View style={{margin: sizes.padding * 3}}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor: colors.black,
                        borderRadius: sizes.radius /1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate}
                >
                    <Text style={{ color: colors.white, ...fonts.h3}}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <LinearGradient colors = {[colors.malibu1, colors.malibu2]}
         style={{flex:1}}
        >
            <ScrollView>
                {renderHeader()}
                {renderForm()}
                {renderButton()}
            </ScrollView>
        </LinearGradient>
            
        
    )

}



export default Login;