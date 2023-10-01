import useMediaContent from "./useMediaContent";
import { Person } from "./useSearchPeople";

interface Genre {
  id: number;
  name: string;
}



export interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  overview: string;
  adult: boolean;
  original_language: string;
  genres: Genre[];
  runtime: number;
}

const useTrendingPeople = (selectedTimeWindow: "day" | "week") =>
  useMediaContent<Person>(
    "/trending/person",
    selectedTimeWindow,
    "trending-people"
  );

export default useTrendingPeople;
