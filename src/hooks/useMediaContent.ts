import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { MovieQuery } from "../components/MovieContainer";
import { TVShowQuery } from "../components/TVShowContainer";





interface FetchResponse<T> {
    page: number;
    results: T[];
}



const useMediaContent = <T>(
    endpoint: string, 
    selectedTimeWindow: 'day' | 'week' | null, 
    query?: MovieQuery & TVShowQuery, 
    ) => {

    const [mediaContent, setMediaContent] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('') 

    const selectedTimeWindowUrl = selectedTimeWindow ? '/' + selectedTimeWindow : '';

    useEffect(() => {
        const controller = new AbortController()
        apiClient
        .get<FetchResponse<T>>(endpoint + selectedTimeWindowUrl , { 
            signal: controller.signal,
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
            }
        
        })
        .then((response) => {
            setMediaContent(response.data.results);
            setIsLoading(false);
            setError('');
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setIsLoading(false);
        })

        return () => controller.abort();
        
    }, [selectedTimeWindowUrl, endpoint, query]);

    return { mediaContent, isLoading, error };
}


export default useMediaContent;