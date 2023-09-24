
import useMediaContent from "./useMediaContent";
import { Movie } from "./useTrendingMovies";







const useSearchMovies = () => useMediaContent<Movie>(
        '/search/movie', 
        null, 
        "search-movies"
    );

export default useSearchMovies;