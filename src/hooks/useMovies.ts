import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



export interface Movie {
    id: number;
    title: string;
    poster_path: string;
}


interface FetchMoviesResponse {
    page: number;
    results: Movie[];
}



const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('') 

    useEffect(() => {
        const controller = new AbortController()
        apiClient
        .get<FetchMoviesResponse>('', { signal: controller.signal })
        .then((response) => {
            setMovies(response.data.results)
            setIsLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
            setIsLoading(false)
        })

        return () => controller.abort()
        
    }, [])

    return { movies, isLoading, error }
}


export default useMovies;