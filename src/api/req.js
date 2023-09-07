import axios from "axios";
import { FLIX_KEY } from "@env";

export const apiList = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${FLIX_KEY}&language=pt-BR&page=1`,

});

export const apiDetail = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/`,
});




 

// const apikey = "cd14786698559924cc02c1c5fc375b06"

// export const api = axios.create({
//     baseURL: ` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=`
// });