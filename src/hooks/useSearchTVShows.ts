import useMediaContent from "./useMediaContent";
import { TVShow } from "../entities/TVShow";

const useSearchTVShows = () =>
  useMediaContent<TVShow>("/search/tv", null, "search-tv-shows");

export default useSearchTVShows;
