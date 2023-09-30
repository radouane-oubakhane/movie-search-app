import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Cast {
  id: number;
  title: string;
  poster_path: string;
  order: number;
  media_type: "movie" | "tv";
}

// interface for combined credits
export interface CombinedCredits {
  id: number;
  cast: Cast[];
}

const usePersonCredits = (id: number | string) =>
  useQuery<CombinedCredits, Error>({
    queryKey: ["person", id, "combined_credits"],
    queryFn: () =>
      apiClient
        .get<CombinedCredits>("/person/" + id + "/combined_credits")
        .then((response) => response.data),
  });

export default usePersonCredits;
