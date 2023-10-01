import { Person } from "../entities/Person";
import useMediaContent from "./useMediaContent";

export interface knownFor {
  name?: string;
  title?: string;
}

const useSearchPeople = () =>
  useMediaContent<Person>("/search/person", null, "search-people");

export default useSearchPeople;
