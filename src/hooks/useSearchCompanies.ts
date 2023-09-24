import useMediaContent from "./useMediaContent";

export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

const useSearchCompanies = () =>
  useMediaContent<Company>("/search/company", null, "search-companies");

export default useSearchCompanies;
