import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}


interface FetchMoviesResponse {
    page: number;
    results: Movie[];
}



const useMovies = (selectedTimeWindow: 'day' | 'week', deps?: any[]) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('') 

    useEffect(() => {
        const controller = new AbortController()
        apiClient
        .get<FetchMoviesResponse>('/trending/movie/' + selectedTimeWindow , { signal: controller.signal })
        .then((response) => {
            setMovies(response.data.results);
            setIsLoading(false);
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setIsLoading(false);
        })

        return () => controller.abort();
        
    }, deps ?? []);

    return { movies, isLoading, error };
}


export default useMovies;