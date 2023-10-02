import { Button, Text, VStack } from "@chakra-ui/react";
import { InfiniteData } from "@tanstack/react-query";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FetchResponse } from "../hooks/useMediaContent";
import { Movie } from "../entities/Movie";
import InfoBoxContainer from "./InfoBoxContainer";
import InfoBoxSkeleton from "./InfoBoxSkeleton";
import MovieInfoBox from "./MovieInfoBox";

interface Props {
  movies: InfiniteData<FetchResponse<Movie>>;
  isLoading: boolean;
  error: string | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

const MovieInfoBoxGrid = ({
  movies,
  isLoading,
  error,
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
}: Props) => {
  const skeletons = Array(12).fill(0);

  useEffect(() => {
    document.title = "Movies - RMDb";
  }, []);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error}
      </Text>
    );

  const fetchedMoviesCount = movies.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<></>}
    >
      <VStack spacing={4} align="stretch">
        {isLoading &&
          skeletons.map((_, index) => (
            <InfoBoxContainer key={index}>
              <InfoBoxSkeleton />
            </InfoBoxContainer>
          ))}
        {movies.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie, index) => (
              <InfoBoxContainer key={index}>
                <MovieInfoBox movie={movie} />
              </InfoBoxContainer>
            ))}
          </React.Fragment>
        ))}
        {hasNextPage && (
          <Button>{isFetchingNextPage ? "Loading..." : "Load More"}</Button>
        )}
      </VStack>
    </InfiniteScroll>
  );
};

export default MovieInfoBoxGrid;
