import { Button, SimpleGrid, Text, Box } from "@chakra-ui/react";

import MovieCard from "./MovieCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import useMovies from "../hooks/useMovies";
import { MovieQuery } from "./MovieContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const {
    data: movies,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMovies(movieQuery);

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
