import { useState } from "react";
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { style } from "./Register.style";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../api/auth";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";

export function Register({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Login, setLogin] = useState();

      const app = initializeApp(firebaseConfig)

      const auth = getAuth(app)
  
      const onRegister = async() => {
          createUserWithEmailAndPassword(auth, email, password).then((response) => {
              Alert.alert('Conta criada com Sucesso !')
              navigation.navigate('Login')
          }).catch((error) => {
            
              console.log(error)
          })
      };
    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={require('../../images/FUNDO.png')} resizeMode="cover" style={style.imagePng}>

                <Text style={style.text1}>Assista em qualquer lugar com nosso aplicativo em seu celular.</Text>

                <Text style={style.text2}>Faça seu Cadastro</Text>

                <TextInput value={email} onChangeText={(e) => setEmail(e)}
                    style={style.input}
                    placeholder="Email"
                />
                <TextInput value={password} onChangeText={(e) => setPassword(e)}
                    style={style.input}
                    placeholder="senha"
                />
                <TouchableOpacity onPress={()=>onRegister ()} style={style.button1}>
                    <Text style={style.button2}>Cadastrar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text style={style.register}>Já é membro? Faça seu Login</Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>
    );
};
