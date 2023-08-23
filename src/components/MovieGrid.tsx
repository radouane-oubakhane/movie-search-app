import { Heading, SimpleGrid, HStack } from "@chakra-ui/react";

import useMovies from "../hooks/useMovies"
import MovieCard from "./MovieCard"
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import TrendingContentSelector from "./TrendingContentSelector";
import { useState } from "react";



const MovieGrid = () => {
    const [selectedTimeWindow, setSelectedTimeWindow] = useState<'day' | 'week'>('day');
    const { mediaContent: movies, isLoading, error } = useMovies(selectedTimeWindow, [selectedTimeWindow]);
    const skeletons = Array(12).fill(0)
    
    return (
        <>
            <HStack justifyContent='space-between' padding='10px'>
                <Heading as='h1' size='2xl'>Trending movies</Heading>
                <TrendingContentSelector onSelectTimeWindow={(timeWindow: 'day' | 'week') => setSelectedTimeWindow(timeWindow)} selectedTimeWindow={selectedTimeWindow} />
            </HStack>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{sm: 2, md: 3, lg: 4, xl:6}} spacing={10} padding='10px'>
                {isLoading && skeletons.map((_, index) => (
                    <CardContainer key={index}>
                        <CardSkeleton />
                    </CardContainer>
                ))}
                {movies.map((movie) => (
                    <CardContainer key={movie.id}>
                        <MovieCard movie={movie} />
                    </CardContainer>
                ))}
            </SimpleGrid> 
        </>
    )
}

export default MovieGrid