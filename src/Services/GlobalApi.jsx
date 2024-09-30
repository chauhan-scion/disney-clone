import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = '1c13105d8f960fc9a22598fd018d5912'

//https://api.themoviedb.org/3/discover/movie?api_key=1c13105d8f960fc9a22598fd018d5912

const getTrendingVideos = axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=1c13105d8f960fc9a22598fd018d5912");

const getMovieByGenreId= axios.get("https://api.themoviedb.org/3/discover/movie?api_key=1c13105d8f960fc9a22598fd018d5912")

export {
    getTrendingVideos,
    getMovieByGenreId
    
    
}
