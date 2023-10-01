import { TVShow } from "../entities/TVShow";
import useMediaContent from "./useMediaContent";

const useTrendingTVShows = (selectedTimeWindow: "day" | "week") =>
  useMediaContent<TVShow>(
    "/trending/tv",
    selectedTimeWindow,
    "trending-tv-shows"
  );

export default useTrendingTVShows;
