import { SafeAreaView, Image } from "react-native";
import { style } from "./CardMovie.style";

export const Movie  = () => {
    
    id: Number;
    poster_path: String;

};

export const CardProps = () => {
    data: Movie;
   
}



export function CardMovies({data, ...rest} = { CardProps}) {
    return (
        <SafeAreaView {...rest} style={style.CardMovie}>
            <Image soucer={{
                uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`
            }}
            style={style.cardImage}
            />
        </SafeAreaView>
    )
}