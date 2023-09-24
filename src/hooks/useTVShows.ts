import { MediaContentQuery } from "../store";
import useMediaContent from "./useMediaContent";
import { TVShow } from "./useTrendingTVShows";









const useTVShows = (mediaContentQuery: MediaContentQuery) => useMediaContent<TVShow>(
        '/discover/tv', 
        null, 
        "tv-shows", 
        mediaContentQuery 
    );

export default useTVShows;