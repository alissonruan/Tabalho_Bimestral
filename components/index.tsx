import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Components(){
    const router = useRouter();
    const[nome, setNome] = useState();
    return(
        <View>
            <Text>Digite o seu nome:</Text>
          <TextInput placeholder="Digite o seu nome" onChangeText={setNome} value={nome}/>
          <Text>Digite sua Altura:</Text>
          <TextInput/>

        </View>
    );
}
