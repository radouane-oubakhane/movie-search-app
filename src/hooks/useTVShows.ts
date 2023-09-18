import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import useMediaContent from "./useMediaContent";
import { TVShow } from "./useTrendingTVShows";









const useTVShows = (tvShowQuery: TVShowQuery) => useMediaContent<TVShow>(
        '/discover/tv', 
        null, 
        "tv-shows", 
        tvShowQuery as (MovieQuery & TVShowQuery & QuerySearch)
    );

export default useTVShows;