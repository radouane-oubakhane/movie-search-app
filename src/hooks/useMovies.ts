import { MovieQuery } from "../components/MovieGrid";
import useMediaContent from "./useMediaContent";
import { Movie } from "./useTrendingMovies";




const useMovies = (movieQuery: MovieQuery) => useMediaContent<Movie>('/discover/movie', null, movieQuery);

export default useMovies;