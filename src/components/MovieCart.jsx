const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCart({ movie }) {
  return (
      <div>
          <img src={IMAGE_BASE_URL + movie.poster_path} 
             
          />
    </div>
  )
}
export default MovieCart