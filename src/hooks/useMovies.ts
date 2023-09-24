
import useMediaContent from "./useMediaContent";
import { Movie } from "./useTrendingMovies";




const useMovies = () => useMediaContent<Movie>(
        '/discover/movie', 
        null, 
        "movies"
    );

export default useMovies;