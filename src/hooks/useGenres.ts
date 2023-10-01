import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import movieGenres from "../data/movie-genres";
import tvShowGenres from "../data/tv-show-genres";
import { Genre } from "../entities/Genre";





interface FetchGenresResponse {
    genres: Genre[];
}


const useGenres = (endpoint: string, queryKey: string[]) => useQuery({
    queryKey: queryKey,
    queryFn: () => apiClient
                        .get<FetchGenresResponse>(endpoint)
                        .then((response) => response.data.genres),
    staleTime: ms('24h'), 
    initialData: queryKey[0] === 'movie-genres' ? movieGenres : tvShowGenres,

})

    
export default useGenres;

