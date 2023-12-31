import { HStack, Heading, Image, VStack, Box, Text } from "@chakra-ui/react";
import AverageVoteCircle from "./AverageVoteCircle";
import getImageUrl from "../services/image-url";
import formatDate from "../services/format-date";
import { Movie } from "../entities/Movie";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <VStack spacing={4} align="stretch">
      <Image
        _hover={{
          transform: "scale(1.03)",
          transition: "transform 0.15s ease-in-out",
        }}
        boxShadow="md"
        borderRadius={10}
        overflow="hidden"
        objectFit="cover"
        src={getImageUrl(movie.poster_path, "w300")}
        alt={`${movie.title} poster`}
      />

      <Box>
        <HStack justifyContent="space-between">
          <VStack align="stretch" flexWrap="wrap">
            <Heading
              fontSize="1xl"
              textAlign="start"
              _hover={{ color: "blue.400" }}
            >
              <Link to={"/movie/" + movie.id}>{movie.title}</Link>
            </Heading>
            <Text as="abbr" textAlign="start">
              {formatDate(movie.release_date)}
            </Text>
          </VStack>
          <AverageVoteCircle averageVote={movie.vote_average} />
        </HStack>
      </Box>
    </VStack>
  );
};

export default MovieCard;
