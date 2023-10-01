import useMediaContent from "./useMediaContent";
import { Movie } from "../entities/Movie";

const useMovies = () =>
  useMediaContent<Movie>("/discover/movie", null, "movies");

export default useMovies;
