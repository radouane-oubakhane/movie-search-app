import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";





interface FetchResponse<T> {
    page: number;
    results: T[];
}



const useMediaContent = <T>(endpoint: string, selectedTimeWindow: 'day' | 'week', deps?: any[]) => {
    const [mediaContent, setMediaContent] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('') 

    useEffect(() => {
        const controller = new AbortController()
        apiClient
        .get<FetchResponse<T>>(endpoint + selectedTimeWindow , { signal: controller.signal })
        .then((response) => {
            setMediaContent(response.data.results.slice(0, 12));
            setIsLoading(false);
            setError('');
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setIsLoading(false);
        })

        return () => controller.abort();
        
    }, deps ?? []);

    return { mediaContent, isLoading, error };
}


export default useMediaContent;