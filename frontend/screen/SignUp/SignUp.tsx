// import React, {useState,useEffect}  from 'react';
// import {
//     View, 
//     Text,
//     TouchableOpacity,
//     TouchableWithoutFeedback,
//     Image,
//     TextInput,
//     Modal,
//     FlatList,
//     KeyboardAvoidingView,
//     ScrollView,
//     Platform,
//     StyleSheet
// } from "react-native";

// import LinearGradient from "expo-linear-gradient";
// import Icon from 'react-native-vector-icons/AntDesign';
// //import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import axios from 'axios';

// import { colors } from '../../components/colors/colors';
// import { sizes,fonts } from '../../components/Text/Size';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import MainContainer from '../../components/Containers/MainContainer';
// //import Login from '../Login/Login';


// // type authScreenNavigationType=StackNavigationProp<>


// const SignUp = () => {
//     const navigation = useNavigation();
//     const [showPassword, setshowPassword] = React.useState(false)

//     const [area,setArea] = React.useState([])
//     const [selectedArea, setSelectedArea] = React.useState(null)
//     const[modalVisible, setModalVisible] = React.useState(false)

//     React.useEffect(() =>{
//         const countryUrl = 'https://restcountries.com/v3.1/all';
//         axios.get(countryUrl)
//     })

//     function renderHeader(){
//         return(
//             <TouchableOpacity
//                 style={{
//                     flexDirection: 'row',
//                     alignItems: "center",
//                     marginTop: sizes.padding *6 ,
//                     paddingHorizontal: sizes.padding *2
//                 }}
//                 onPress={() => console.log("Sign up")}
//             >
//                 <Icon 
//                     name='arrowleft'
//                     size={20}
//                     color= {colors.black}
//                 />
//                 <Text style={{ marginLeft: sizes.padding * 1.5,color: colors.black,
//                 ...fonts.h4}}>Login</Text>
//             </TouchableOpacity>
//         )
//     }

//     function renderForm(){
//         return(
//             <View
//                 style={{
//                     marginTop: sizes.padding * 3,
//                     marginHorizontal: sizes.padding * 3,
//                 }}
//             >
//                 {/* Full Name */}
//                 <View style={{marginTop: sizes.padding * 3}}>
//                     <Text style={{color: colors.black, ...fonts.body3}}>Full Name</Text>
//                     <TextInput
//                         style={{
//                             marginVertical: sizes.padding,
//                             borderBottomColor:colors.black,
//                             borderBottomWidth: 1,
//                             height: 40,
//                             color: colors.black,
//                             ...fonts.body3
//                         }}
//                         placeholder= "Enter Full Name"
//                         placeholderTextColor={colors.black}
//                         selectionColor={colors.black}/>
//                 </View>

//                 {/* Phone Number */}

//                 <View style={{marginTop: sizes.padding * 2}}>
//                     <Text style={{ color: colors.black, ...fonts.body3}}>Phone Number</Text>
                    
//                     <View style={{flexDirection: 'row'}}>
//                         {/* Country code */}
//                             <TouchableOpacity 
//                                 style={{
//                                     width: 100,
//                                     height: 50,
//                                     marginHorizontal: 5,
//                                     borderBottomColor: colors.black,
//                                     borderBottomWidth: 1,
//                                     flexDirection: 'row',
//                                     ...fonts.body2
//                              }}
//                              onPress={() => console.log("Show modal")}
//                              >
                                
//                                 <View style={{justifyContent: 'center'}}>
//                                 <Icon 
//                                     name='down'
//                                     size={20}
//                                     color= {colors.black}
//                                 />
                                    
//                                 </View>
//                                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
//                                     {/* <Image
//                                         source={images.usFlag}
//                                         resizeMode="contain"
//                                         style={{
//                                             width: 30,
//                                             height: 30
//                                         }}
//                                     /> */}
//                                 </View>

//                                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
//                                     <Text style={{color:colors.black,...fonts.body3}}>US+1</Text>
//                                 </View>
//                              </TouchableOpacity>

//                              {/* Phone Number */}
//                              <TextInput
//                                 style={{
//                                     flex: 1,
//                                     marginVertical: sizes.padding,
//                                     borderBottomColor: colors.black,
//                                     borderBottomWidth: 1,
//                                     height: 40,
//                                     color: colors.black,
//                                     ...fonts.body3
//                                 }}
//                                 placeholder= "Enter Your Phone Number"
//                                 placeholderTextColor={colors.black}
//                                 selectionColor={colors.black}
//                              />
//                     </View>
//                 </View>
                
//                 {/* Password */}
//                 <View style={{marginTop:sizes.padding * 2}}>
//                     <Text style={{color:colors.black,...fonts.body3}}>Password</Text>
//                     <TextInput 
//                         style={{
//                             marginVertical: sizes.padding,
//                             borderBottomColor: colors.black,
//                             borderBottomWidth: 1,
//                             height: 40,
//                             color: colors.black,
//                             ...fonts.body3
                            
//                         }}
//                         placeholder="Enter your password"
//                         placeholderTextColor={colors.black}
//                         selectionColor={colors.black}
//                         secureTextEntry={!showPassword}
//                     />
//                     <TouchableOpacity
//                         style={{
//                             position: 'absolute',
//                             right: 0,
//                             bottom: 10,
//                             height: 30,
//                             width: 30
//                         }}
//                         onPress={() => setshowPassword(!showPassword)}
//                     >
//                     <Icon 
//                     name='eye'
//                     size={20}
//                     color= {colors.black}
//                     />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }

//     function renderButton() {
//         return(
//             <View style={{margin: sizes.padding * 3}}>
//                 <TouchableOpacity
//                     style={{
//                         height: 60,
//                         backgroundColor: colors.black,
//                         borderRadius: sizes.radius /1.5,
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}
//                     onPress={() => navigation.navigate}
//                 >
//                     <Text style={{ color: colors.white, ...fonts.h3}}>Continue</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }

//     return(
//         <MainContainer
//          style={{flex:1}}
//         >
//             <ScrollView>
//                 {renderHeader()}
//                 {renderForm()}
//                 {renderButton()}
//             </ScrollView>
//         </MainContainer>
            
        
//     )

// }



// export default SignUp;