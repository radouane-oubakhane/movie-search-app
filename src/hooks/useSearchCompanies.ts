
import { MediaContentQuery } from "../store";
import useMediaContent from "./useMediaContent";






export interface Company {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}




const useSearchCompanies = (mediaContentQuery: MediaContentQuery) => useMediaContent<Company>(
        '/search/company', 
        null, 
        "search-companies", 
        mediaContentQuery 
    );

export default useSearchCompanies;