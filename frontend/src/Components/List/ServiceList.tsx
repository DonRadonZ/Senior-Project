import React,{ FunctionComponent} from 'react';
import { FlatList, TouchableOpacity,GestureResponderEvent } from 'react-native'

import { Text,Box } from '@react-native-material/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { Services } from '../helpers/interfaces';
import { colors } from '../Colors/colors';

interface Props {
    list: Array<Services>;
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

const ServiceList: FunctionComponent<Props> = ({ list ,onPress}) => {

    return (
        <FlatList
            contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
            }}
            data={list}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    style={{
                        width: 70,
                        alignItems: "center",
                        marginHorizontal: 10,
                        marginBottom: 20,
                    }}
                    onPress={()=>{}}
                >
                    <Box
                        style={{
                            backgroundColor: colors.white,
                            borderStartColor: colors.white,
                            width: 70,
                            height: 70,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 16,
                            marginBottom: 10,

                        }}
                    
                    >
                        <FontAwesome5 name={item.icon} size={30} color={colors.navyblue} />
                    </Box>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 8,
                            color: colors.navyblue,
                            textTransform:"capitalize",
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
            numColumns={4}
        />
    )
}

export default ServiceList