import { VStack, Box, Heading, Text, HStack } from "@chakra-ui/react";
import { Person } from "../entities/Person";
import getAge from "../services/get-age";
import getGender from "../services/get-gender";

interface Props {
  person: Person;
}

const PersonalInfo = ({ person }: Props) => {
  return (
    <VStack paddingTop={10} spacing={4} align="stretch">
      <Heading as="h2" size="md">
        Personal Info
      </Heading>
      <Box h="40px">
        <Text fontSize="md" fontWeight="bold">
          Known For
        </Text>
        <Text fontSize="md">{person.known_for_department}</Text>
      </Box>
      <Box h="40px">
        <Text fontSize="md" fontWeight="bold">
          Gender
        </Text>
        <Text fontSize="md">{getGender(person.gender)}</Text>
      </Box>
      <Box h="40px">
        <Text fontSize="md" fontWeight="bold">
          Birthday
        </Text>
        <HStack>
          <Text fontSize="md">{person.birthday}</Text>
          <Text fontSize="md">{getAge(person.birthday)}</Text>
        </HStack>
      </Box>
      <Box h="40px">
        <Text fontSize="md" fontWeight="bold">
          Place of Birth
        </Text>
        <Text fontSize="md">{person.place_of_birth}</Text>
      </Box>
    </VStack>
  );
};

export default PersonalInfo;
