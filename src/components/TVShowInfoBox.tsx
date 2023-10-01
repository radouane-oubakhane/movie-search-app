import {
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import getImageUrl from "../services/image-url";
import { TVShow } from "../entities/TVShow";
import formatDate from "../services/format-date";
import { Link } from "react-router-dom";

interface Props {
  tvShow: TVShow;
}

const TVShowInfoBox = ({ tvShow }: Props) => {
  return (
    <>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "150px" }}
        src={getImageUrl(tvShow.poster_path, "w300")}
        alt={`${tvShow.name} poster`}
      />

      <Stack>
        <CardBody>
          <Heading size="md" _hover={{ color: "blue.400" }}>
            <Link to={"/tv/" + tvShow.id}>{tvShow.name}</Link>
          </Heading>

          <Text py="2" color="gray">
            {formatDate(tvShow.first_air_date)}
          </Text>
        </CardBody>

        <CardFooter>
          <Text py="2">{tvShow.overview}</Text>
        </CardFooter>
      </Stack>
    </>
  );
};

export default TVShowInfoBox;
