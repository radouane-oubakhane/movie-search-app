import { VStack, Text, Button } from "@chakra-ui/react";
import { TVShow } from "../hooks/useTrendingTVShows";
import TVShowInfoBox from "./TVShowInfoBox";
import InfoBoxContainer from "./InfoBoxContainer";
import InfoBoxSkeleton from "./InfoBoxSkeleton";
import { InfiniteData } from "@tanstack/react-query";
import { FetchResponse } from "../hooks/useMediaContent";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";




interface Props {
  tvShows: InfiniteData<FetchResponse<TVShow>>
  isLoading: boolean;
  error: string | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}






const TVShowInfoBoxGrid = ({ tvShows, isLoading, error, isFetchingNextPage, fetchNextPage, hasNextPage }: Props) => {
  const skeletons = Array(12).fill(0);


  if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>;

  const fetchedTVShowsCount = tvShows.pages.reduce((total, page) => total + page.results.length, 0);

  return (
    <InfiniteScroll
      dataLength={fetchedTVShowsCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<></>}
    >
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
        tvShows.pages.map((page, index) => (
          <React.Fragment key={index}>
            {
              page.results.map((tvShow, index) => (
                <InfoBoxContainer key={index}>
                  <TVShowInfoBox 
                  tvShow={tvShow}
                  />
                </InfoBoxContainer>
              ))
            }
          </React.Fragment>))
      }
      {hasNextPage && (
          <Button>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
    </VStack>
    </InfiniteScroll>
  )
}

export default TVShowInfoBoxGrid