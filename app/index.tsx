import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function App(){
    const router = useRouter();
    return(
        <View>
            <Text>Bem Vindo ao App</Text>
        </View>
    )
}