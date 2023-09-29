import {
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import { Movie } from "../hooks/useTrendingMovies";
import getImageUrl from "../services/image-url";
import formatDate from "../services/format-date";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

const MovieInfoBox = ({ movie }: Props) => {
  return (
    <>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "150px" }}
        src={getImageUrl(movie.poster_path, "w300")}
        alt={`${movie.title} poster`}
      />

      <Stack>
        <CardBody>
          <Heading size="md" _hover={{ color: "blue.400" }}>
            <Link to={"/movie/" + movie.id}>
            {movie.title}
            </Link>
          </Heading>

          <Text py="2" color="gray">
            {formatDate(movie.release_date)}
          </Text>
        </CardBody>

        <CardFooter>
          <Text py="2">{movie.overview}</Text>
        </CardFooter>
      </Stack>
    </>
  );
};

export default MovieInfoBox;
