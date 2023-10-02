import {
  ListItem,
  Skeleton,
  Spinner,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { InfiniteData } from "@tanstack/react-query";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FetchResponse } from "../hooks/useMediaContent";
import { keyword } from "../entities/keyword";

interface Props {
  keywords: InfiniteData<FetchResponse<keyword>>;
  isLoading: boolean;
  error: string | undefined;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

const KeywordInfoList = ({
  keywords,
  isLoading,
  error,
  fetchNextPage,
  hasNextPage,
}: Props) => {
  useEffect(() => {
    document.title = "Keywords - RMDb";
  }, []);

  const skeletons = Array(12).fill(0);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error}
      </Text>
    );

  const fetchedKeywordCount = keywords.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchedKeywordCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <UnorderedList>
        {isLoading &&
          skeletons.map((_, index) => (
            <Text boxShadow="md" padding={4} key={index}>
              <Skeleton height="10px" />
            </Text>
          ))}
      </UnorderedList>

      <UnorderedList>
        {keywords.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((keyword, index) => (
              <ListItem key={index}>{keyword.name}</ListItem>
            ))}
          </React.Fragment>
        ))}
      </UnorderedList>
    </InfiniteScroll>
  );
};

export default KeywordInfoList;
