
import { MediaContentQuery } from "../store";
import useMediaContent from "./useMediaContent";
import { Movie } from "./useTrendingMovies";







const useSearchMovies = (mediaContentQuery: MediaContentQuery) => useMediaContent<Movie>(
        '/search/movie', 
        null, 
        "search-movies", 
        mediaContentQuery
    );

export default useSearchMovies;