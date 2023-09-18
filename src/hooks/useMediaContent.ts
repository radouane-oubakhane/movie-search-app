import apiClient from "../services/api-client";
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";
import { QuerySearch } from "../pages/SearchResultsPage";
import { useQuery } from "@tanstack/react-query";





interface FetchResponse<T> {
    page: number;
    results: T[];
    total_results: number;
}


const useMediaContent = <T>(
    endpoint: string, 
    selectedTimeWindow: 'day' | 'week' | null, 
    queryKey: string,
    query?: MovieQuery & TVShowQuery & QuerySearch
    ) => {
        const selectedTimeWindowUrl = selectedTimeWindow ? '/' + selectedTimeWindow : '';

        return useQuery<FetchResponse<T>, Error>({
            queryKey: [queryKey, query, selectedTimeWindow],
            queryFn: () => 
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
                        'query': query?.query,              
                    }
                
                })
                .then((response) => response.data),


        })
    }

export default useMediaContent;


