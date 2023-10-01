import { Company } from "../entities/Company";
import useMediaContent from "./useMediaContent";

const useSearchCompanies = () =>
  useMediaContent<Company>("/search/company", null, "search-companies");

export default useSearchCompanies;
