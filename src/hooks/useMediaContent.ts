import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient from "../services/api-client";
import useMediaContentQueryStore from "../store";

export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}

const useMediaContent = <T>(
  endpoint: string,
  selectedTimeWindow: "day" | "week" | null,
  queryKey: string
) => {
  const mediaContentQuery = useMediaContentQueryStore(
    (s) => s.mediaContentQuery
  );
  const selectedTimeWindowUrl = selectedTimeWindow
    ? "/" + selectedTimeWindow
    : "";

  return useInfiniteQuery<FetchResponse<T>, Error>({
    queryKey: [queryKey, mediaContentQuery, selectedTimeWindow],
    queryFn: ({ pageParam }) =>
      apiClient
        .get<FetchResponse<T>>(endpoint + selectedTimeWindowUrl, {
          params: {
            sort_by: mediaContentQuery?.sortBy,
            "primary_release_date.gte":
              mediaContentQuery?.primaryReleaseDateGte,
            "primary_release_date.lte":
              mediaContentQuery?.primaryReleaseDateLte,
            "first_air_date.gte": mediaContentQuery?.fistAirDateGte,
            "first_air_date.lte": mediaContentQuery?.firstAirDateLte,
            "release_date.lte": mediaContentQuery?.releaseDateLte,
            screened_theatrically: mediaContentQuery?.screenedTheatrically,
            with_genres: mediaContentQuery?.withGenres,
            with_original_language: mediaContentQuery?.withOriginalLanguage,
            "vote_average.gte": mediaContentQuery?.voteAverageGte,
            "vote_average.lte": mediaContentQuery?.voteAverageLte,
            "vote_count.gte": mediaContentQuery?.voteCountGte,
            "with_runtime.lte": mediaContentQuery?.withRuntimeLte,
            "with_runtime.gte": mediaContentQuery?.withRuntimeGte,
            with_keywords: mediaContentQuery?.withKeywords,
            query: mediaContentQuery?.searchText,
            page: pageParam,
          },
        })
        .then((response) => response.data),
    getNextPageParam: (lastPage, allPages) =>
      allPages.length >= lastPage.total_pages ? undefined : lastPage.page + 1,
    staleTime: ms("24h"),
  });
};

export default useMediaContent;
