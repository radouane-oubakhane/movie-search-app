import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Credits } from "../entities/Credits";

const useMovieCredits = (id: number | string) =>
  useQuery<Credits, Error>({
    queryKey: ["movie", id, "credits"],
    queryFn: () =>
      apiClient
        .get<Credits>("/movie/" + id + "/credits")
        .then((response) => response.data),
  });

export default useMovieCredits;
