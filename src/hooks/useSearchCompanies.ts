
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import useMediaContent from "./useMediaContent";






export interface Company {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}




const useSearchCompanies = (querySearch: QuerySearch) => useMediaContent<Company>('/search/company', null, querySearch as (MovieQuery & TVShowQuery & QuerySearch));

export default useSearchCompanies;