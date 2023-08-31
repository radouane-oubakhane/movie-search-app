import { SimpleGrid, HStack, Text } from "@chakra-ui/react";

import MovieCard from "./MovieCard"
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import useMovies from "../hooks/useMovies";
import { MovieQuery } from "./MovieContainer";


interface Props {
    movieQuery: MovieQuery;
}



const MovieGrid = ({ movieQuery }: Props) => {
    const { mediaContent: movies, isLoading, error } = useMovies(movieQuery);

    const skeletons = Array(12).fill(0);
    

    if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>
    
    return (
        <>
            <HStack justifyContent='space-between' padding='10px'>
            </HStack>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl:5 }} spacing={10} padding='10px'>
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