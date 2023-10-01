import useMediaContent from "./useMediaContent";
import { TVShow } from "../entities/TVShow";

const useTVShows = () =>
  useMediaContent<TVShow>("/discover/tv", null, "tv-shows");

export default useTVShows;
