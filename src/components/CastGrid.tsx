import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useCredits from "../hooks/useCredits";
import PersonCardSkeleton from "./PersonCardSkeleton";
import CardContainer from "./CardContainer";
import CastCard from "./CastCard";

interface Props {
  id: string;
  title: string;
}

const CastGrid = ({ id, title }: Props) => {
  const { data: credits, isLoading, error } = useCredits(id);

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
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={10}>
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
      </SimpleGrid>
    </>
  );
};

export default CastGrid;
