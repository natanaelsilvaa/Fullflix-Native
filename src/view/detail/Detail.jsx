import { useEffect, useState } from "react";
import { SafeAreaView, ImageBackground, Button, Text} from "react-native";
import { apiDetail } from "../../api/req";
import { style } from "./Detail.style";
import { FLIX_KEY } from '@env';
import { Card, Icon } from 'react-native-elements';


export function Detail ({ navigation, route })  {
   const [value, setValue] = useState([route.params.text]);
   const [details, setDetails] = useState([]);


   async function openDetail() {
    const result = await apiDetail.get(`${value}?api_key=${FLIX_KEY}&language=pt-BR`);
    setDetails(result.data)
   }

   useEffect(() => {
    openDetail()
   });
   
   const onBack = () => {
    navigation.navigate("HomeList",{
        text:"",
    })
   }
   
   
   
    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={require('../../images/FUNDO.png')} resizeMode="cover" style={style.imageFundo}>
            <Card>
                <Card.Title>{details.title}</Card.Title>
                <Card.Divider/>
                <Card.Image 
                style={style.image}
                source={{
                    uri:`https://image.tmdb.org/t/p/w500/${details.poster_path}`
                }}                
                />
                <Text style={{ marginBottom: 10}}>{details.overview}</Text>  
                <Button
                style={style.button}              
                icon={<Icon name="code" color="white"/>}
                onPress={()=> onBack()}
                title="Voltar"
                />
            </Card>
        
            </ImageBackground>
        </SafeAreaView >
    );  
};