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

import {colors} from "../../component/color"
import { sizes,fonts } from '../../component/Text/Size';
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
                <Text style={{ marginLeft: sizes.padding * 1.5,color: colors.white,
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
                    <Text style={{color:colors.lightgreen,...fonts.body3}}>Username</Text>
                    <TextInput 
                        style={{
                            marginVertical: sizes.padding,
                            borderBottomColor: colors.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: colors.white,
                            ...fonts.body3
                            
                        }}
                        placeholder="Enter your username"
                        placeholderTextColor={colors.white}
                        selectionColor={colors.white}
                    />
                </View>
                {/* Password */}
                <View style={{marginTop:sizes.padding * 2}}>
                    <Text style={{color:colors.lightgreen,...fonts.body3}}>Password</Text>
                    <TextInput 
                        style={{
                            marginVertical: sizes.padding,
                            borderBottomColor: colors.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: colors.white,
                            ...fonts.body3
                            
                        }}
                        placeholder="Enter your password"
                        placeholderTextColor={colors.white}
                        selectionColor={colors.white}
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
                    color= {colors.white}
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
         <LinearGradient colors = {[colors.lime, colors.emerald]}
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