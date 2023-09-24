import { MediaContentQuery } from "../store";
import useMediaContent from "./useMediaContent";
import { TVShow } from "./useTrendingTVShows";

const useSearchTVShows = (mediaContentQuery: MediaContentQuery) =>
  useMediaContent<TVShow>(
    "/search/tv",
    null,
    "search-tv-shows",
    mediaContentQuery
  );

export default useSearchTVShows;
