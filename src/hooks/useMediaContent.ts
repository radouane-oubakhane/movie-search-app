import apiClient from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";





export interface FetchResponse<T> {
    page: number;
    results: T[];
    total_results: number;
    total_pages: number;
}


const useMediaContent = <T>(
    endpoint: string, 
    selectedTimeWindow: 'day' | 'week' | null, 
    queryKey: string,
    query?: MovieQuery & TVShowQuery & QuerySearch
    ) => {
        const selectedTimeWindowUrl = selectedTimeWindow ? '/' + selectedTimeWindow : '';

        return useInfiniteQuery<FetchResponse<T>, Error>({
            queryKey: [queryKey, query, selectedTimeWindow],
            queryFn: ({ pageParam }) => 
                apiClient
                .get<FetchResponse<T>>(endpoint + selectedTimeWindowUrl , { 
                    params: {
                        sort_by: query?.sortBy,
                        'primary_release_date.gte': query?.primaryReleaseDateGte,
                        'primary_release_date.lte': query?.primaryReleaseDateLte,
                        'first_air_date.gte': query?.fistAirDateGte,
                        'first_air_date.lte': query?.firstAirDateLte,
                        'release_date.lte': query?.releaseDateLte,
                        'screened_theatrically': query?.screenedTheatrically,
                        'with_genres': query?.withGenres,
                        'with_original_language': query?.withOriginalLanguage,
                        'vote_average.gte': query?.voteAverageGte,
                        'vote_average.lte': query?.voteAverageLte,
                        'vote_count.gte': query?.voteCountGte,
                        'with_runtime.lte': query?.withRuntimeLte,
                        'with_runtime.gte': query?.withRuntimeGte,
                        'with_keywords': query?.withKeywords,  
                        query: query?.query,   
                        page: pageParam,           
                    }
                
                })
                .then((response) => response.data),
            getNextPageParam: (lastPage, allPages) => 
                        allPages.length >= lastPage.total_pages 
                        ? undefined 
                        : lastPage.page + 1,
            staleTime: ms('24h'),


        })
    }

export default useMediaContent;


