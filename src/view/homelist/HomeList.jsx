import { SafeAreaView, ImageBackground, TextInput, Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator} from "react-native";
import { style } from "./HomeList.style";
import { AntDesign } from '@expo/vector-icons'; 
import { useEffect, useState } from "react";
import { api, apiList } from    '../../api/req';

export function HomeList({ navigation, route }) {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState();
    const [loading, setLoading] = useState();



const start = async () => {
    setLoading(true)
    const result = await apiList.get();
    setImages([...images, ...result.data.results]);
    setPage(page + 1)
    setLoading(false)
}

useEffect(() => {
    start();
},[]);



 const onDetail = (id) => {
     navigation.navigate("Detail", {
         text: id
     })

};

    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={require('../../images/FUNDO.png')} resizeMode="cover" style={style.imageFundo}>
             <Text style={style.textHeader}>Oque você quer assistir hoje?</Text> 
             <View style={style.containerInput}>
                <TextInput
                 placeholderTextColor={'#FFF'} placeholder='buscar' style={style.input}/>
                <AntDesign name="search1" size={24} color="white"  />
             </View>
      
        <FlatList 
    
            numColumns={3}
            data={images}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index}) => (
               <TouchableOpacity onPress={() => onDetail (item.id)}>
                   <Image style={style.imageMovie}
                       key={index}
                       //syle={StyleSheet.image}
                       source={{
                           uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                       }}
                   />
               </TouchableOpacity>
            )}
            onEndReached={()=> start()}
            onEndReachedThreshold={0.5}
            />
        
            {loading && <ActivityIndicator size={50} color="#0296e5"/>}
            </ImageBackground>
        </SafeAreaView >
    );  
};

