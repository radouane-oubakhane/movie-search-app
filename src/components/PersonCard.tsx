import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Person } from "../entities/Person";
import getImageUrl from "../services/image-url";

interface Props {
  person: Person;
}

const PersonCard = ({ person }: Props) => {
  return (
    <VStack spacing={4} align="stretch" paddingY={2}>
      <Image
        _hover={{
          transform: "scale(1.03)",
          transition: "transform 0.15s ease-in-out",
        }}
        boxShadow="md"
        borderRadius={10}
        overflow="hidden"
        objectFit="cover"
        src={getImageUrl(person.profile_path, "w300")}
        alt={`${person.name} poster`}
      />

      <HStack justifyContent="space-between">
        <VStack align="stretch">
          <Heading
            fontSize="1xl"
            textAlign="start"
            _hover={{ color: "blue.400" }}
          >
            <Link to={"/person/" + person.id}>{person.name}</Link>
          </Heading>
          <Text fontSize="sm">
            {person.known_for?.map((item, index) => (
              <React.Fragment key={index}>
                {item.title || item.name}
                {index === person.known_for.length - 1 ? "" : ","}
              </React.Fragment>
            ))}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default PersonCard;
