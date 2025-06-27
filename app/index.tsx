import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface atributo{
    peso:String;
    altura:String;
}
export default function App({peso,altura}:atributo){
    const router = useRouter();
    const [resultado, setResultado] = useState('');

    function calcularIMC(){
    
        setResultado(
        String(Number(Number(peso) / (Number(altura) * Number(altura))).toFixed(2))
        )
    }   

           return(
            <View>
              <TouchableOpacity style={styles.button} onPress={calcularIMC}>
                <Text style={styles.button}>Calcular IMC</Text>
               </TouchableOpacity>
               <Text style={styles.text}>O Resultado do IMC é: {resultado}</Text>
            </View>
        
        )

    }
        const styles = StyleSheet.create({
            
    button: {
        textAlign: "center",
        borderWidth: 1,
        color: "white",
        backgroundColor: "red",
        fontSize: 25
    },

    text:{
        textAlign: "center",
        fontSize: 20
    }


 })