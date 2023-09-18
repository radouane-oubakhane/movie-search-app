
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import useMediaContent from "./useMediaContent";
import { TVShow } from "./useTrendingTVShows";







const useSearchTVShows = (querySearch: QuerySearch) => useMediaContent<TVShow>(
        '/search/tv', 
        null, 
        "search-tv-shows", 
        querySearch as (MovieQuery & TVShowQuery & QuerySearch)
    );

export default useSearchTVShows;