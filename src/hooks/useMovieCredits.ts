import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Cast {
  id: number;
  adult: boolean;
  gender: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
  character: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;

  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

const useMovieCredits = (id: number | string) =>
  useQuery<Credits, Error>({
    queryKey: ["movie", id, "credits"],
    queryFn: () =>
      apiClient
        .get<Credits>("/movie/" + id + "/credits")
        .then((response) => response.data),
  });

export default useMovieCredits;
