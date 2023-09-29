import {
  Center,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import AdultBadge from "../components/AdultBadge";
import AverageVoteCircle from "../components/AverageVoteCircle";
import CastGrid from "../components/CastGrid";
import useMovie from "../hooks/useMovie";
import formatDate from "../services/format-date";
import getYearFromDate from "../services/get-year-from-date";
import getImageUrl from "../services/image-url";
import minutesToHours from "../services/minutes-to-hours";
import DetailPageSkeleton from "../components/DetailPageSkeleton";

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // id: string
  const { data: movie, error, isLoading } = useMovie(id!);

  if (isLoading) return <DetailPageSkeleton />;

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error.message}
      </Text>
    );

  if (!movie) return null;

  return (
    <Grid
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
            src={getImageUrl(movie.poster_path, "w300")}
            alt={`${movie.title} poster`}
          />
        </Center>
      </GridItem>
      <GridItem area="details" padding={16}>
        <VStack spacing={4} align="stretch">
          <Heading fontSize="2xl" fontWeight="bold">
            {movie.title}
            <Text as="abbr" color="gray.400" p={2}>
              {getYearFromDate(movie.release_date)}
            </Text>
          </Heading>
          <HStack flexWrap="wrap">
            <AdultBadge isAdult={movie.adult} />
            <Text p={1}>{formatDate(movie.release_date)}</Text>
            <Text>({movie.original_language.toUpperCase()})</Text>
            <Text>|</Text>
            <Text p={1}>
              {movie.genres.map((genre) => genre.name).join(", ")}
            </Text>
            <Text>|</Text>
            <Text p={1}>{minutesToHours(movie.runtime)}</Text>
            <AverageVoteCircle averageVote={movie.vote_average} />
          </HStack>
          <VStack paddingY={16}>
            <Heading fontSize="md" fontWeight="bold" as="h1">
              Overview
            </Heading>
            <Text p={2}>{movie.overview}</Text>
          </VStack>
        </VStack>
      </GridItem>
      <GridItem area="divider">
        <Divider />
      </GridItem>
      <GridItem area="cast" paddingX={8}>
        <CastGrid id={id!} title="Top Billed Cast" />
      </GridItem>
    </Grid>
  );
};

export default MovieDetailPage;
