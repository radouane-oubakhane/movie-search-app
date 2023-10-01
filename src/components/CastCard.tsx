import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Cast } from "../entities/Cast";
import getImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  cast: Cast;
}

const CastCard = ({ cast }: Props) => {
  return (
    <VStack spacing={4} align="stretch">
      <Link to={"/person/" + cast.id}>
        <Image
          _hover={{
            transform: "scale(1.03)",
            transition: "transform 0.15s ease-in-out",
          }}
          boxShadow="md"
          borderRadius={10}
          overflow="hidden"
          objectFit="cover"
          src={getImageUrl(cast.profile_path, "w300")}
          alt={`${cast.name} poster`}
        />
      </Link>
      <Box>
        <HStack justifyContent="space-between">
          <VStack align="stretch">
            <Heading
              fontSize="1xl"
              textAlign="start"
              _hover={{ color: "blue.400" }}
            >
              <Link to={"/person/" + cast.id}>{cast.name}</Link>
            </Heading>
            <Text fontSize="sm">
              {cast.character.length > 30
                ? `${cast.character.substring(0, 30)}...`
                : cast.character}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
};

export default CastCard;
