import { SimpleGrid } from "@chakra-ui/react";

import useMovies from "../hooks/useMovies"
import MovieCard from "./MovieCard"
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";



const MovieGrid = () => {
    const { movies, isLoading, error } = useMovies()
    const skeletons = Array(12).fill(0)
    
    return (
        <>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl:5}} spacing={10} padding='10px'>
                {isLoading && skeletons.map((_, index) => (
                    <MovieCardContainer>
                        <MovieCardSkeleton key={index} />
                    </MovieCardContainer>
                ))}
                {movies.map((movie) => (
                    <MovieCardContainer>
                        <MovieCard key={movie.id} movie={movie} />
                    </MovieCardContainer>
                ))}
            </SimpleGrid> 
        </>
    )
}

export default MovieGrid