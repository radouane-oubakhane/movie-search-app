import { Heading, SimpleGrid, HStack } from "@chakra-ui/react";

import useMovies from "../hooks/useMovies"
import MovieCard from "./MovieCard"
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import TrendingContentSelector from "./TrendingContentSelector";
import { useState } from "react";



const MovieGrid = () => {
    const [selectedTimeWindow, setSelectedTimeWindow] = useState<'day' | 'week'>('day')
    const { movies, isLoading, error } = useMovies(selectedTimeWindow, [selectedTimeWindow])
    const skeletons = Array(12).fill(0)
    
    return (
        <>
            <HStack>
                <Heading as='h1' size='2xl' padding='10px'>Trending</Heading>
                <TrendingContentSelector onSelectTimeWindow={(timeWindow: 'day' | 'week') => setSelectedTimeWindow(timeWindow)} />
            </HStack>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{sm: 2, md: 3, lg: 4, xl:6}} spacing={10} padding='10px'>
                {isLoading && skeletons.map((_, index) => (
                    <MovieCardContainer key={index}>
                        <MovieCardSkeleton />
                    </MovieCardContainer>
                ))}
                {movies.map((movie) => (
                    <MovieCardContainer key={movie.id}>
                        <MovieCard movie={movie} />
                    </MovieCardContainer>
                ))}
            </SimpleGrid> 
        </>
    )
}

export default MovieGrid