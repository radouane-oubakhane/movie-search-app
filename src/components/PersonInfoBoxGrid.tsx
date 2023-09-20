import { VStack, Text, Button } from "@chakra-ui/react";
import { Person } from "../hooks/useSearchPeople";
import PersonInfoBox from "./PersonInfoBox";
import PersonInfoBoxSkeleton from "./PersonInfoBoxSkeleton";
import { InfiniteData } from "@tanstack/react-query";
import { FetchResponse } from "../hooks/useMediaContent";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  people: InfiniteData<FetchResponse<Person>>;
  isLoading: boolean;
  error: string | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

const PersonInfoBoxGrid = ({
  people,
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

  const fetchedPeopleCount = people.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchedPeopleCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<></>}
    >
      <VStack spacing={4} align="stretch">
        {isLoading &&
          skeletons.map((_, index) => <PersonInfoBoxSkeleton key={index} />)}
        {people.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((person, index) => (
              <PersonInfoBox key={index} person={person} />
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

export default PersonInfoBoxGrid;
