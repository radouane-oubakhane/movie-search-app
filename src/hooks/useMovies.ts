
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import useMediaContent from "./useMediaContent";
import { Movie } from "./useTrendingMovies";




const useMovies = (movieQuery: MovieQuery) => useMediaContent<Movie>(
        '/discover/movie', 
        null, 
        "movies", movieQuery as (MovieQuery & TVShowQuery & QuerySearch)
    );

export default useMovies;