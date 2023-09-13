import tvshowGenres from "../data/tvshow-genres";
import useGenres from "./useGenres";






// const useTVShowGenres = () => useGenres('/genre/tv/list')


const useTVShowGenres = () => ({genres: tvshowGenres, isLoading: false, error: false})



export default useTVShowGenres;