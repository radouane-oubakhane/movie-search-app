import { Movie } from "../entities/Movie";
import useMediaContent from "./useMediaContent";

const useTrendingMovies = (selectedTimeWindow: "day" | "week") =>
  useMediaContent<Movie>(
    "/trending/movie",
    selectedTimeWindow,
    "trending-movies"
  );

export default useTrendingMovies;
