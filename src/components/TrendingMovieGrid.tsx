import { Heading, SimpleGrid, HStack, Text } from "@chakra-ui/react";

import useTrendingMovies from "../hooks/useTrendingMovies"
import MovieCard from "./MovieCard"
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import TrendingContentSelector from "./TrendingContentSelector";
import { useState } from "react";
import React from "react";



const MovieGrid = () => {
    const [selectedTimeWindow, setSelectedTimeWindow] = useState<'day' | 'week'>('day');
    const { data: movies, isLoading, error } = useTrendingMovies(selectedTimeWindow);
    const skeletons = Array(12).fill(0)

    if (error) return <Text fontSize='2xl' textAlign='center'>{error.message}</Text>
    
    return (
        <>
            <HStack justifyContent='space-between' padding='10px' flexWrap="wrap">
                <Heading as='h1' size='2xl'>Trending movies</Heading>
                <TrendingContentSelector onSelectTimeWindow={(timeWindow: 'day' | 'week') => setSelectedTimeWindow(timeWindow)} selectedTimeWindow={selectedTimeWindow} />
            </HStack>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl:6 }} spacing={10} padding='10px'>
                {isLoading && skeletons.map((_, index) => (
                    <CardContainer key={index}>
                        <CardSkeleton />
                    </CardContainer>
                ))}
                {
                    movies?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.results.slice(0,12).map((movie) => (
                                <CardContainer key={movie.id}>
                                    <MovieCard movie={movie} />
                                </CardContainer>
                            ))}
                        </React.Fragment>
                    ))
                }
            </SimpleGrid> 
        </>
    )
}

export default MovieGrid