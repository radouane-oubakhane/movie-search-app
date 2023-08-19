import { HStack, Heading, Image, VStack, Box } from "@chakra-ui/react";
import AverageVoteCircle from "./AverageVoteCircle";
import getImageUrl from "../services/image-url";
import { TVShow } from "../hooks/useTVShows";

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
              <Heading fontSize="1xl">
                  {tvShow.name}
              </Heading>
              <AverageVoteCircle averageVote={tvShow.vote_average} />
          </HStack>
      </Box>
    </VStack>
  )
}

export default MovieCard