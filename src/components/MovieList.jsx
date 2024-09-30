import { useEffect, useState } from "react"
import { getMovieByGenreId } from "../Services/GlobalApi"
import MovieCart from "./MovieCart"






const MovieList = ({ genreId }) => {

    const [movieList,SetMovieList]=useState([])
    
    const getMovieByGenre = () => {
        getMovieByGenreId.then((resp) => {
            console.log(resp)
            SetMovieList(resp.data.results)

            
    })
        
    }






    useEffect(() => {
        getMovieByGenre();
    })
  return (
      <div className="flex">{movieList.map((item, index) => (
          <MovieCart movie={ item} />
      )) }</div>
  )
}
export default MovieList