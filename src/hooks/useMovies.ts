
import { MediaContentQuery } from "../store";
import useMediaContent from "./useMediaContent";
import { Movie } from "./useTrendingMovies";




const useMovies = (movieQuery: MediaContentQuery) => useMediaContent<Movie>(
        '/discover/movie', 
        null, 
        "movies", movieQuery as (MediaContentQuery)
    );

export default useMovies;