
import { MediaContentQuery } from "../store";
import useMediaContent from "./useMediaContent";






export interface keyword {
    id: number;
    name: string;
}




const useSearchPerson = (mediaContentQuery: MediaContentQuery) => useMediaContent<keyword>(
        '/search/keyword', 
        null, 
        "search-keywords", 
        mediaContentQuery 
    );

export default useSearchPerson;