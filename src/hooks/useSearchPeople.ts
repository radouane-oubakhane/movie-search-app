
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import useMediaContent from "./useMediaContent";



export interface knownFor {
    name?: string;
    title?: string;
}


export interface Person {
    id: number;
    name: string;
    known_for_department: string;
    profile_path: string;
    known_for: knownFor[];
}





const useSearchPeople = (querySearch: QuerySearch) => useMediaContent<Person>(
        '/search/person', 
        null, 
        "search-people", 
        querySearch as (MovieQuery & TVShowQuery & QuerySearch)
    );

export default useSearchPeople;