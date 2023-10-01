import useMediaContent from "./useMediaContent";
import { Movie } from "../entities/Movie";

const useSearchMovies = () =>
  useMediaContent<Movie>("/search/movie", null, "search-movies");

export default useSearchMovies;
