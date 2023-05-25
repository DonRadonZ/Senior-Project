import React,{ ComponentProps, memo } from "react";
import { View,StyleSheet,Text } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../Colors/colors";


type Props = ComponentProps<typeof TextInput>&{errorText?: string};

const TextInputs = ({errorText, ...props}: Props) =>(
 <View style={styles.container}>
    <TextInput
      style={styles.input}
      selectionColor={colors.black}
      underlineColor="transparent"
      mode="outlined"
      {...props}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text>:null}
 </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
    },
    input:{
        backgroundColor: colors.black,
    },
    error: {
        fontSize: 14,
        color: colors.red,
        paddingHorizontal: 4,
        paddingTop:4,
    }
})

export default memo(TextInputs);