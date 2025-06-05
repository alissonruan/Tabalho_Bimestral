import React from "react";
import { TextInput, View } from "react-native";

export default function CalculoImc(){
    return(
        <View>
            <TextInput style={styles.input} onChangeText={onChangeNumber} value={text}/>
        </View>
    );

}