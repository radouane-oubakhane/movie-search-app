import useMediaContent from "./useMediaContent";
import { TVShow } from "./useTrendingTVShows";

const useTVShows = () =>
  useMediaContent<TVShow>("/discover/tv", null, "tv-shows");

export default useTVShows;
