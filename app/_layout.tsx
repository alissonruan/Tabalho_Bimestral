import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
export default function ExibirCalculo(){
    
    const router = useRouter();
        const[nome, setNome] = useState();
        const[altura, setAltura] = useState();
        const[peso, setPeso] = useState();
    
    return(
        <View>
            <Text style={styles.title}>Bem Vindo ao App</Text>
             <Text style={styles.blue}>Digite o seu nome:</Text>
             <TextInput style={styles.text} onChangeText={setNome} value={nome}/>
             
             <Text style={styles.blue}>Digite sua Altura:</Text>
             <TextInput style={styles.text} onChangeText={setAltura} value={altura}/>
             
             <Text style={styles.blue}>Digite o seu Peso:</Text>
             <TextInput style={styles.text} onChangeText={setPeso} value={peso}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
    },

    blue: {
        borderWidth: 1,
        borderColor: "blue",
        color: "black",
        fontSize: 25,
        textAlign: "center"
    },

    text: {
        fontSize: 25,
        textAlign: "center"
    },

    title:{
        borderWidth: 1,
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
        fontSize: 25
    }
})