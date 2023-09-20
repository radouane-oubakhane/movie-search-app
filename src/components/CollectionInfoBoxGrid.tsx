import { VStack, Text, Button } from "@chakra-ui/react";
import InfoBoxContainer from "./InfoBoxContainer";
import InfoBoxSkeleton from "./InfoBoxSkeleton";
import { Collection } from "../hooks/useSearchCollections";
import CollectionInfoBox from "./CollectionInfoBox";
import { InfiniteData } from "@tanstack/react-query";
import { FetchResponse } from "../hooks/useMediaContent";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  collections: InfiniteData<FetchResponse<Collection>>;
  isLoading: boolean;
  error: string | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

const CollectionInfoBoxGrid = ({
  collections,
  isLoading,
  error,
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
}: Props) => {
  const skeletons = Array(12).fill(0);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error}
      </Text>
    );

  const fetchedCollectionsCount = collections.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchedCollectionsCount}
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
        {collections.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((collection, index) => (
              <InfoBoxContainer key={index}>
                <CollectionInfoBox collection={collection} />
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

export default CollectionInfoBoxGrid;
