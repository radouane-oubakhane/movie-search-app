import { Card, CardBody, HStack, Heading, Hide, Image, Text, VStack, Box } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import AverageVoteCircle from "./AverageVoteCircle";

interface Props {
    movie: Movie;
}



const MovieCard = ({ movie }: Props) => {
  return (
    <VStack 
    spacing={4}
    align='stretch'>
    
    <Image borderRadius={10} overflow='hidden'
    src={'https://image.tmdb.org/t/p/original' + movie.poster_path} 
    alt={`${movie.title} poster`} 
    />
   
   <Box>
        <HStack justifyContent='space-between'>
            <Heading fontSize="2xl">
                {movie.title}
            </Heading>
            <AverageVoteCircle averageVote={movie.vote_average} />
        </HStack>
    </Box>
    </VStack>
  )
}

export default MovieCard