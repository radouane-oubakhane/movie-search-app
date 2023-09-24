import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";

import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import TVShowCard from "./TVShowCard";
import useTVShows from "../hooks/useTVShows";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MediaContentQuery } from "../store";

interface Props {
  mediaContentQuery: MediaContentQuery;
}

const TVShowGrid = ({ mediaContentQuery }: Props) => {
  const {
    data: tvShows,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useTVShows(mediaContentQuery);
  const skeletons = Array(12).fill(0);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error.message}
      </Text>
    );

  const fetchedTVShowsCount =
    tvShows?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedTVShowsCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<></>}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((_, index) => (
            <CardContainer key={index}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {tvShows?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((tvShow) => (
              <CardContainer key={tvShow.id}>
                <TVShowCard tvShow={tvShow} />
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

export default TVShowGrid;
