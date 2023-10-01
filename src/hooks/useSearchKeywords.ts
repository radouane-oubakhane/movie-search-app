import { keyword } from "../entities/keyword";
import useMediaContent from "./useMediaContent";

const useSearchPerson = () =>
  useMediaContent<keyword>("/search/keyword", null, "search-keywords");

export default useSearchPerson;
