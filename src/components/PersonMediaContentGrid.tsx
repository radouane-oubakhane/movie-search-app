import { Heading, Text } from "@chakra-ui/react";
import usePersonCredits from "../hooks/usePersonCredits";
import CardContainer from "./CardContainer";
import MediaContentCardSkeleton from "./MediaContentCardSkeleton";
import CastGridContainer from "./CastGridContainer";
import MediaContentCard from "./MediaContentCard";

interface Props {
  id: string;
  title: string;
}

const PersonCastGrid = ({ id, title }: Props) => {
  const { data: credits, isLoading, error } = usePersonCredits(id);

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
              <MediaContentCardSkeleton />
            </CardContainer>
          ))}
        {cast?.slice(0, 10).map((cast, index) => (
          <CardContainer key={index}>
            <MediaContentCard cast={cast} />
          </CardContainer>
        ))}
      </CastGridContainer>
    </>
  );
};

export default PersonCastGrid;
