import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { TVShow } from "../entities/TVShow";

const useTVShow = (id: number | string) =>
  useQuery<TVShow, Error>({
    queryKey: ["tv", id],
    queryFn: () =>
      apiClient.get<TVShow>("/tv/" + id).then((response) => response.data),
  });

export default useTVShow;
