import { HStack, Heading, Image, VStack, Box, Text } from "@chakra-ui/react";
import AverageVoteCircle from "./AverageVoteCircle";
import getImageUrl from "../services/image-url";
import { TVShow } from "../hooks/useTVShows";
import formatDate from "../services/format-date";

interface Props {
    tvShow: TVShow;
}



const MovieCard = ({ tvShow }: Props) => {
  return (
    <VStack 
    spacing={4}
    align='stretch'>
      <Image borderRadius={10} overflow='hidden'
      src={getImageUrl(tvShow.poster_path, 'w300')} 
      alt={`${tvShow.name} poster`} 
    />
      <Box>
          <HStack justifyContent='space-between'>
          <VStack align='stretch'>
              <Heading fontSize="1xl" textAlign='start'>
                {tvShow.name}
              </Heading>
              <Text as='abbr' textAlign='start'>
                {formatDate(tvShow.first_air_date)}
              </Text>
            </VStack>
              <AverageVoteCircle averageVote={tvShow.vote_average} />
          </HStack>
      </Box>
    </VStack>
  )
}

export default MovieCard