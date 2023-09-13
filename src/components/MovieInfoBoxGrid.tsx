import { VStack, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useTrendingMovies"
import InfoBoxContainer from "./InfoBoxContainer";
import InfoBoxSkeleton from "./InfoBoxSkeleton";
import MovieInfoBox from "./MovieInfoBox";


interface Props {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}


const MovieInfoBoxGrid = ({ movies, isLoading, error }: Props) => {
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
        movies.map((movie, index) => (
          <InfoBoxContainer key={index}>
            <MovieInfoBox 
            movie={movie}
            />
          </InfoBoxContainer>
        ))
      }
    </VStack>
  )
}

export default MovieInfoBoxGrid