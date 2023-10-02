import {
  Badge,
  Divider,
  HStack,
  Image,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { InfiniteData } from "@tanstack/react-query";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FetchResponse } from "../hooks/useMediaContent";
import getImageUrl from "../services/image-url";
import { Company } from "../entities/Company";

interface Props {
  companies: InfiniteData<FetchResponse<Company>>;
  isLoading: boolean;
  error: string | undefined;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

const CompanyInfoList = ({
  companies,
  isLoading,
  error,
  fetchNextPage,
  hasNextPage,
}: Props) => {
  useEffect(() => {
    document.title = "Companies - RMDb";
  }, []);
  const skeletons = Array(12).fill(0);

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error}
      </Text>
    );

  const fetchedCompaniesCount = companies.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchedCompaniesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <VStack spacing={4} align="stretch">
        {isLoading &&
          skeletons.map((_, index) => (
            <Text boxShadow="md" padding={4} key={index}>
              <Skeleton height="10px" />
            </Text>
          ))}
      </VStack>

      <VStack spacing={4} align="stretch">
        {companies.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((company) => (
              <React.Fragment key={company.id}>
                <HStack spacing="24px">
                  {!company.logo_path && <Text>{company.name}</Text>}
                  {company.logo_path && (
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "60px" }}
                      src={getImageUrl(company.logo_path, "w300")}
                      alt={`${company.name} logo`}
                    />
                  )}
                  <Badge size="lg">{company.origin_country}</Badge>
                </HStack>
                <Divider />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </VStack>
    </InfiniteScroll>
  );
};

export default CompanyInfoList;
