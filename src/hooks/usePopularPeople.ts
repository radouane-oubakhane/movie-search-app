import useMediaContent from "./useMediaContent";
import { Person } from "./useSearchPeople";




const usePopularPeople = () => useMediaContent<Person>(
    '/person/popular', 
    null, 
    "popular-people",
);

export default usePopularPeople;