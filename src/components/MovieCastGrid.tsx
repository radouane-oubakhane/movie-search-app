import { Heading, Text } from "@chakra-ui/react";
import useMovieCredits from "../hooks/useMovieCredits";
import CardContainer from "./CardContainer";
import CastCard from "./CastCard";
import CastGridContainer from "./CastGridContainer";
import PersonCardSkeleton from "./PersonCardSkeleton";

interface Props {
  id: string;
  title: string;
}

const MovieCastGrid = ({ id, title }: Props) => {
  const { data: credits, isLoading, error } = useMovieCredits(id);

  const cast = credits?.cast?.sort((a, b) => a.order - b.order).slice(0, 10);

  const skeletons = Array(12).fill(0);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error.message}
      </Text>
    );

  if (cast?.length === 0) return null;

  return (
    <>
      <Heading fontSize="2xl" paddingY={6}>
        {title}
      </Heading>
      <CastGridContainer>
        {isLoading &&
          skeletons.map((_, index) => (
            <CardContainer key={index}>
              <PersonCardSkeleton />
            </CardContainer>
          ))}
        {cast?.slice(0, 10).map((cast, index) => (
          <CardContainer key={index}>
            <CastCard cast={cast} />
          </CardContainer>
        ))}
      </CastGridContainer>
    </>
  );
};

export default MovieCastGrid;
