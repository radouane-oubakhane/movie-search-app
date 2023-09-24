import useMediaContent from "./useMediaContent";
import { TVShow } from "./useTrendingTVShows";

const useSearchTVShows = () =>
  useMediaContent<TVShow>("/search/tv", null, "search-tv-shows");

export default useSearchTVShows;
