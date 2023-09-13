import movieGenres from "../data/movie-genres";
// import useGenres from "./useGenres";





// const useMovieGenres = () => useGenres('/genre/movie/list')

const useMovieGenres = () => ({genres: movieGenres, isLoading: false, error: null})



export default useMovieGenres;