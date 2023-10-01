import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entities/Movie";
import apiClient from "../services/api-client";

const useMovie = (id: number | string) =>
  useQuery<Movie, Error>({
    queryKey: ["movie", id],
    queryFn: () =>
      apiClient.get<Movie>("/movie/" + id).then((response) => response.data),
  });

export default useMovie;
