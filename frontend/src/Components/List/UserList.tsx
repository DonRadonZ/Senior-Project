import React,{ FunctionComponent} from 'react';
import { FlatList, TouchableOpacity,GestureResponderEvent } from 'react-native'

import { Text,Box } from '@react-native-material/core';
import { FontAwesome5 } from '@expo/vector-icons';
import { User } from '../helpers/interfaces';
import { colors } from '../Colors/colors';
import { Avatar } from '@react-native-material/core';
interface Props {
    list: Array<User>;
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

const UserList: FunctionComponent<Props> = ({ list ,onPress}) => {

    return (
        <FlatList
            contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
            }}
            data={list}
            renderItem={({ item,index }) => (
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
                        <Avatar size={45} label={item.fullName} />
                    </Box>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 8,
                            color: colors.navyblue,
                            textTransform:"capitalize",
                        }}
                    >
                        {item.fullName}
                    </Text>
                </TouchableOpacity>
            )}
            numColumns={5}
        />
    )
}

export default UserList