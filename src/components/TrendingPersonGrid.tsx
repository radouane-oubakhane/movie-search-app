import { HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import useTrendingPeople from "../hooks/useTrendingPeople";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import PersonCard from "./PersonCard";
import TrendingContentSelector from "./TrendingContentSelector";

const TrendingPersonGrid = () => {
  const [selectedTimeWindow, setSelectedTimeWindow] = useState<"day" | "week">(
    "day"
  );
  const {
    data: people,
    isLoading,
    error,
  } = useTrendingPeople(selectedTimeWindow);
  const skeletons = Array(12).fill(0);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error.message}
      </Text>
    );

  return (
    <>
      <HStack justifyContent="space-between" padding="10px" flexWrap="wrap">
        <Heading as="h1" size="2xl">
          Trending people
        </Heading>
        <TrendingContentSelector
          onSelectTimeWindow={(timeWindow: "day" | "week") =>
            setSelectedTimeWindow(timeWindow)
          }
          selectedTimeWindow={selectedTimeWindow}
        />
      </HStack>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 6 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((_, index) => (
            <CardContainer key={index}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {people?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.slice(0, 12).map((person) => (
              <CardContainer key={person.id}>
                <PersonCard person={person} />
              </CardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </>
  );
};

export default TrendingPersonGrid;
