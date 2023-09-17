import useGenres from "./useGenres";



const useMovieGenres = () => useGenres('/genre/movie/list', ['movie-genres'])


export default useMovieGenres;