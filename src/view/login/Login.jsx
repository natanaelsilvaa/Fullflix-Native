import { useState } from "react";
import { Alert, ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { style } from "./Login.style";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../api/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export function Login({ navigation })  {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  

     const app = initializeApp(firebaseConfig) 

     const auth = getAuth(app)

        const login = async() => {
            signInWithEmailAndPassword(auth, email, password).then((response)=> {
                Alert.alert('Logado com Sucesso !');
                navigation.navigate('HomeList');
            }).catch((error)=> {
                console.log(error)
            })
        };

    

    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={require('../../images/FULLFLIXX.png')} resizeMode="cover" style={style.imagePng}>
                <Text style={style.text}>Entrar</Text>

                <TextInput value={email} onChangeText={(e) => setEmail(e)}
                    style={style.input}
                    placeholder="Email"
                />
                <TextInput value={password} onChangeText={(e) => setPassword(e)}
                    style={style.input}
                    placeholder="senha"
                />
                <TouchableOpacity onPress={() => login()} style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={style.register}>Novo por aqui? Assine agora.</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView> 
    );
};
 