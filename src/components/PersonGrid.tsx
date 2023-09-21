import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import usePopularPeople from "../hooks/usePopularPeople";
import CardContainer from "./CardContainer";
import PersonCard from "./PersonCard";
import PersonCardSkeleton from "./PersonCardSkeleton";

const PersonGrid = () => {
  const {
    data: people,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePopularPeople();

  const skeletons = Array(12).fill(0);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error.message}
      </Text>
    );

  const fetchedMoviesCount =
    people?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<></>}
    >
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing={10}
        paddingX="10px"
      >
        {isLoading &&
          skeletons.map((_, index) => (
            <CardContainer key={index}>
              <PersonCardSkeleton />
            </CardContainer>
          ))}
        {people?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((person) => (
              <CardContainer key={person.id}>
                <PersonCard person={person} />
              </CardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Box padding="10px">
        {hasNextPage && (
          <Button width="100%">
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
      </Box>
    </InfiniteScroll>
  );
};

export default PersonGrid;
