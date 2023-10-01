import useMediaContent from "./useMediaContent";
import { Person } from "../entities/Person";

const usePopularPeople = () =>
  useMediaContent<Person>("/person/popular", null, "popular-people");

export default usePopularPeople;
