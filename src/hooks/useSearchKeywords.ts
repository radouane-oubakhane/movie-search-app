
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import useMediaContent from "./useMediaContent";






export interface keyword {
    id: number;
    name: string;
}




const useSearchPerson = (querySearch: QuerySearch) => useMediaContent<keyword>(
        '/search/keyword', 
        null, 
        "search-keywords", 
        querySearch as (MovieQuery & TVShowQuery & QuerySearch)
    );

export default useSearchPerson;