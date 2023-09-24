import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useMovies from "../hooks/useMovies";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import MovieCard from "./MovieCard";



const MovieGrid = () => {
  const {
    data: movies,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMovies();

  const skeletons = Array(12).fill(0);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error.message}
      </Text>
    );

  const fetchedMoviesCount =
    movies?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<></>}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        paddingX="10px"
      >
        {isLoading &&
          skeletons.map((_, index) => (
            <CardContainer key={index}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {movies?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <CardContainer key={movie.id}>
                <MovieCard movie={movie} />
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

export default MovieGrid;
