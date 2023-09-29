import { HStack, Heading, Image, VStack, Box, Text } from "@chakra-ui/react";
import AverageVoteCircle from "./AverageVoteCircle";
import getImageUrl from "../services/image-url";
import { TVShow } from "../hooks/useTrendingTVShows";
import formatDate from "../services/format-date";
import { Link } from "react-router-dom";


interface Props {
    tvShow: TVShow;
}



const TVShowCard = ({ tvShow }: Props) => {
  return (
    <VStack 
    spacing={4}
    align='stretch'>
      <Image boxShadow='md' borderRadius={10} overflow='hidden'
      src={getImageUrl(tvShow.poster_path, 'w300')} 
      alt={`${tvShow.name} poster`} 
    />
      <Box>
          <HStack justifyContent='space-between'>
          <VStack align='stretch'>
              <Heading fontSize="1xl" textAlign='start' _hover={{ color: 'blue.400' }}>
              <Link to={'/tv/' + tvShow.id} >
              {tvShow.name}
                  </Link>
                
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

export default TVShowCard