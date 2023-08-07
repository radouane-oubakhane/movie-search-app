import { useEffect, useState } from "react"
import apiClient from "../services/api-client"


interface Movie {
    id: number;
    title: string;
}


interface FetchMoviesResponse {
    page: number;
    results: Movie[];
}



const MovieGrid = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [Error, setError] = useState('') 

    useEffect(() => {
        apiClient.get<FetchMoviesResponse>('').then((response) => {
            setMovies(response.data.results)
            setIsLoading(false)
        }).catch((error) => {
            setError(error)
            setIsLoading(false)
        })
        
    }, [])
  return (
    <ul>
        {movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
            }
    </ul> 
    )
}

export default MovieGrid