import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Credits } from "../entities/Credits";

const useTVShowCredits = (id: number | string) =>
  useQuery<Credits, Error>({
    queryKey: ["tv", id, "credits"],
    queryFn: () =>
      apiClient
        .get<Credits>("/tv/" + id + "/credits")
        .then((response) => response.data),
  });

export default useTVShowCredits;
