import {
  Center,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import AdultBadge from "../components/AdultBadge";
import AverageVoteCircle from "../components/AverageVoteCircle";
import MediaContentDetailSkeleton from "../components/MediaContentDetailSkeleton";
import TVShowCastGrid from "../components/TVShowCastGrid";
import useTVShow from "../hooks/useTVShow";
import formatDate from "../services/format-date";
import getYearFromDate from "../services/get-year-from-date";
import getImageUrl from "../services/image-url";
import minutesToHours from "../services/minutes-to-hours";
import Footer from "../components/Footer";
import { useEffect } from "react";

const TVShowDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // id: string
  const { data: tvShow, error, isLoading } = useTVShow(id!);

  useEffect(() => {
    document.title = `${tvShow?.name || "TV Show"} - RMDb`;
  }, []);

  if (isLoading) return <MediaContentDetailSkeleton />;

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error.message}
      </Text>
    );

  if (!tvShow) return null;

  return (
    <>
      <Grid
        paddingBottom={6}
        justifyContent="center"
        templateAreas={{
          base: `"image" "details" "divider" "cast"`,
          sm: `"image details" "divider divider" "cast cast"`,
        }}
        templateColumns={{
          base: "1fr",
          sm: "300px 1fr",
        }}
      >
        <GridItem area="image" padding={10}>
          <Center>
            <Image
              justifyContent="center"
              boxShadow="md"
              borderRadius={20}
              overflow="hidden"
              blur="0px"
              src={getImageUrl(tvShow.poster_path, "w300")}
              alt={`${tvShow.name} poster`}
            />
          </Center>
        </GridItem>
        <GridItem area="details" padding={8} paddingY={14}>
          <VStack spacing={4} align="stretch">
            <Heading fontSize="2xl" fontWeight="bold">
              {tvShow.name}
              <Text as="abbr" color="gray.400" p={2}>
                {getYearFromDate(tvShow.first_air_date)}
              </Text>
            </Heading>
            <HStack flexWrap="wrap">
              <AdultBadge isAdult={tvShow.adult} />
              <Text p={1}>{formatDate(tvShow.first_air_date)}</Text>
              <Text>({tvShow.original_language.toUpperCase()})</Text>
              <Text>|</Text>
              <Text p={1}>
                {tvShow.genres.map((genre) => genre.name).join(", ")}
              </Text>
              <Text>|</Text>
              <Text p={1}>{minutesToHours(tvShow.runtime)}</Text>
              <AverageVoteCircle averageVote={tvShow.vote_average} />
            </HStack>
            <VStack paddingY={8}>
              <Heading fontSize="md" fontWeight="bold" as="h1">
                Overview
              </Heading>
              <Text p={2}>{tvShow.overview}</Text>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem area="divider">
          <Divider />
        </GridItem>
        <GridItem area="cast" paddingX={8}>
          <TVShowCastGrid id={id!} title="Top Billed Cast" />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

export default TVShowDetailPage;
