import { Card, CardBody, HStack, Heading, Hide, Image, Text, VStack, Box } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import AverageVoteCircle from "./AverageVoteCircle";
import getImageUrl from "../services/image-url";

interface Props {
    movie: Movie;
}



const MovieCard = ({ movie }: Props) => {
  return (
    <VStack 
    spacing={4}
    align='stretch'>
      <Image borderRadius={10} overflow='hidden'
      src={getImageUrl(movie.poster_path, 'w300')} 
      alt={`${movie.title} poster`} 
    />
      <Box>
          <HStack justifyContent='space-between'>
              <Heading fontSize="1xl">
                  {movie.title}
              </Heading>
              <AverageVoteCircle averageVote={movie.vote_average} />
          </HStack>
      </Box>
    </VStack>
  )
}

export default MovieCard