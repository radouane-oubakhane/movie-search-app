import useGenres from "./useGenres";
import movieGenres from "../data/movie-genres";





// const useMovieGenres = () => useGenres('/genre/movie/list')

const useMovieGenres = () => ({genres: movieGenres, isLoading: false, error: false})



export default useMovieGenres;