
import { MovieQuery } from "../components/MovieContainer";
import useMediaContent from "./useMediaContent";
import { Movie } from "./useTrendingMovies";




const useMovies = (movieQuery: MovieQuery) => useMediaContent<Movie>('/discover/movie', null, movieQuery);

export default useMovies;