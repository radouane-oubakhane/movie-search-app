import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Cast } from "../hooks/useCredits";
import getImageUrl from "../services/image-url";

interface Props {
  cast: Cast;
}

const CastCard = ({ cast }: Props) => {
  return (
    <VStack spacing={4} align="stretch">
      <Image
        boxShadow="md"
        borderRadius={10}
        overflow="hidden"
        objectFit="cover"
        src={getImageUrl(cast.profile_path, "w200")}
        alt={`${cast.name} poster`}
      />
      <Box>
        <HStack justifyContent="space-between">
          <VStack align="stretch">
            <Heading fontSize="1xl" textAlign="start">
              {cast.name}
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
