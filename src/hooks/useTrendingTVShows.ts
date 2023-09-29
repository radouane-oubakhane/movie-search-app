import useMediaContent from "./useMediaContent";

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

const useTrendingTVShows = (selectedTimeWindow: "day" | "week") =>
  useMediaContent<TVShow>(
    "/trending/tv",
    selectedTimeWindow,
    "trending-tv-shows"
  );

export default useTrendingTVShows;
