
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import useMediaContent from "./useMediaContent";


export interface Collection {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
}




const useSearchCollections = (querySearch: QuerySearch) => useMediaContent<Collection>(
        '/search/collection', 
        null, 
        "search-collections", 
        querySearch as (MovieQuery & TVShowQuery & QuerySearch)
    );

export default useSearchCollections;