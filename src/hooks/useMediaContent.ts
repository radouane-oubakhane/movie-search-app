import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { MovieQuery } from "../components/MovieContainer";





interface FetchResponse<T> {
    page: number;
    results: T[];
}



const useMediaContent = <T>(
    endpoint: string, 
    selectedTimeWindow: 'day' | 'week' | null, 
    movieQuery?: MovieQuery, 
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
                sort_by: movieQuery?.sortBy,
                'primary_release_date.gte': movieQuery?.primaryReleaseDateGte,
                'primary_release_date.lte': movieQuery?.primaryReleaseDateLte,
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
        
    }, [selectedTimeWindowUrl, endpoint, movieQuery]);

    return { mediaContent, isLoading, error };
}


export default useMediaContent;