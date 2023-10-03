import { Box, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { Cast } from "../hooks/usePersonCredits";
import getImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  cast: Cast;
}

const MediaContentCard = ({ cast }: Props) => {
  const path = cast.media_type === "movie" ? "/movie/" : "/tv/";
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
        src={getImageUrl(cast.poster_path, "w300")}
        alt={`${cast.title} poster`}
      />
      <Box>
        <HStack justifyContent="space-between">
          <VStack align="stretch">
            <Heading
              fontSize="1xl"
              textAlign="start"
              _hover={{ color: "blue.400" }}
            >
              <Link to={path + cast.id}>{cast.title}</Link>
            </Heading>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
};

export default MediaContentCard;
