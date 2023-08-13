import { SimpleGrid } from "@chakra-ui/react";

import useMovies from "../hooks/useMovies"
import MovieCard from "./MovieCard"
import MovieCardSkeleton from "./MovieCardSkeleton";



const MovieGrid = () => {
    const { movies, isLoading, error } = useMovies()
    const skeletons = Array(12).fill(0)
    
    return (
        <>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl:5}} spacing={10} padding='10px'>
                {isLoading && skeletons.map((_, index) => <MovieCardSkeleton key={index}  />)}
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </SimpleGrid> 
        </>
    )
}

export default MovieGrid