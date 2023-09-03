import { TVShowQuery } from "../components/TVShowContainer";
import useMediaContent from "./useMediaContent";
import { TVShow } from "./useTrendingTVShows";









const useTVShows = (tvShowQuery: TVShowQuery) => useMediaContent<TVShow>('/discover/tv', null, tvShowQuery);

export default useTVShows;