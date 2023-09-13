
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import useMediaContent from "./useMediaContent";
import { Movie } from "./useTrendingMovies";







const useSearchMovies = (querySearch: QuerySearch) => useMediaContent<Movie>('/search/movie', null, querySearch as (MovieQuery & TVShowQuery & QuerySearch));

export default useSearchMovies;