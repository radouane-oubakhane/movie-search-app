import { HStack, Heading, Image, VStack, Box, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import AverageVoteCircle from "./AverageVoteCircle";
import getImageUrl from "../services/image-url";
import formatDate from "../services/format-date";

interface Props {
    movie: Movie;
}



const MovieCard = ({ movie }: Props) => {
  return (
    <VStack 
    spacing={4}
    align='stretch'>
      <Image borderRadius={10} overflow='hidden'
      objectFit='cover'
      src={getImageUrl(movie.poster_path, 'w300')} 
      alt={`${movie.title} poster`} 
    />
      <Box>
          <HStack justifyContent='space-between'>
            <VStack align='stretch'>
              <Heading fontSize="1xl" textAlign='start'>
                {movie.title}
              </Heading>
              <Text as='abbr' textAlign='start'>
                {formatDate(movie.release_date)}
              </Text>
            </VStack>
            <AverageVoteCircle averageVote={movie.vote_average} />
          </HStack>
      </Box>
    </VStack>
  )
}

export default MovieCard