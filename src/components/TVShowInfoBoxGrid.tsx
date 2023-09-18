import { VStack, Text } from "@chakra-ui/react";
import { TVShow } from "../hooks/useTrendingTVShows";
import TVShowInfoBox from "./TVShowInfoBox";
import InfoBoxContainer from "./InfoBoxContainer";
import InfoBoxSkeleton from "./InfoBoxSkeleton";




interface Props {
  tvShows: TVShow[];
  isLoading: boolean;
  error: string | undefined;
}






const TVShowInfoBoxGrid = ({ tvShows, isLoading, error }: Props) => {
  const skeletons = Array(12).fill(0);


  if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>;

  return (
    <VStack
    spacing={4}
    align='stretch'
    >
      {
        isLoading && skeletons.map((_, index) => (
          <InfoBoxContainer key={index}>
            <InfoBoxSkeleton />
          </InfoBoxContainer>
        ))
      }
      {
        tvShows.map((tvShow, index) => (
          <InfoBoxContainer key={index}>
            <TVShowInfoBox 
            tvShow={tvShow}
            />
          </InfoBoxContainer>
        ))
      }
    </VStack>
  )
}

export default TVShowInfoBoxGrid