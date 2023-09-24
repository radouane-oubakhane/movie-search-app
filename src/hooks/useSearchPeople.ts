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

const useSearchPeople = () =>
  useMediaContent<Person>("/search/person", null, "search-people");

export default useSearchPeople;
