import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    genres: Genre[];
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('') 

    useEffect(() => {
        const controller = new AbortController()
        apiClient
        .get<FetchGenresResponse>('/genre/movie/list', { signal: controller.signal })
        .then((response) => {
            setGenres(response.data.genres)
            setIsLoading(false)
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
            setIsLoading(false)
        })

        return () => controller.abort()
        
    }, [])

    return { genres, isLoading, error }


}



export default useGenres;