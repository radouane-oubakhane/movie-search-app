import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import getImageUrl from "../services/image-url";
import { Person } from "../hooks/useSearchPeople";
import { Link } from "react-router-dom";

interface Props {
  person: Person;
}

const PersonInfoBox = ({ person }: Props) => {
  return (
    <Stack direction={["column", "row"]} spacing="24px" justifyItems="center" padding={2}>
      <Link to={"/person/" + person.id}>
        <Image
          _hover={{
            transform: "scale(1.03)",
            transition: "transform 0.15s ease-in-out",
          }}
          objectFit="cover"
          boxShadow="md"
          h="90px"
          w="90px"
          borderRadius={20}
          src={getImageUrl(person.profile_path, "w300")}
          alt={`${person.profile_path} poster`}
        />
      </Link>
      <VStack
        direction={["column", "row"]}
        spacing={4}
        align="stretch"
        padding={4}
      >
        <Text as="b" _hover={{ color: "blue.400" }}>
          <Link to={"/person/" + person.id}>{person.name}</Link>
        </Text>
        <HStack flexWrap="wrap">
          <Text> {person.known_for_department} </Text>
          {person.known_for.length === 0 || <Text>•</Text>}
          {person.known_for.map((item, index) => (
            <Text key={index} fontSize="sm">
              {item.title || item.name}
              {index === person.known_for.length - 1 ? "" : ","}
            </Text>
          ))}
        </HStack>
      </VStack>
    </Stack>
  );
};

export default PersonInfoBox;
