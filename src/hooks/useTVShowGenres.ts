import tvShowGenres from "../data/tv-show-genres";
import useGenres from "./useGenres";






// const useTVShowGenres = () => useGenres('/genre/tv/list')


const useTVShowGenres = () => ({genres: tvShowGenres, isLoading: false, error: null})



export default useTVShowGenres;