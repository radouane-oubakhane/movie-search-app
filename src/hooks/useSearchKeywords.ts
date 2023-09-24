
import useMediaContent from "./useMediaContent";






export interface keyword {
    id: number;
    name: string;
}




const useSearchPerson = () => useMediaContent<keyword>(
        '/search/keyword', 
        null, 
        "search-keywords"
    );

export default useSearchPerson;