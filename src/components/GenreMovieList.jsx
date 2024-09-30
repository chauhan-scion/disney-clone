import GenresList from "../Constant/GenresList"
import MovieList from "./MovieList"

const GenreMovieList = () => {
  return (
      <div className="bg-[#131520]">
          {GenresList.genere.map((item, index) => index <= 4 && (
          <div className="p-6 py-6 md:px-16">
                  <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
                  <MovieList genreId={item.id } />
          </div>
          ))}
      </div>
  )
}
export default GenreMovieList