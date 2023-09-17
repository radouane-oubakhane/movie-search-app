import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import movieGenres from "../data/movie-genres";
import tvShowGenres from "../data/tv-show-genres";



interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    genres: Genre[];
}


const useGenres = (endpoint: string, queryKey: string[]) => useQuery({
    queryKey: queryKey,
    queryFn: () => apiClient
                        .get<FetchGenresResponse>(endpoint)
                        .then((response) => response.data.genres),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: queryKey[0] === 'movie-genres' ? movieGenres : tvShowGenres,

})

    
export default useGenres;

