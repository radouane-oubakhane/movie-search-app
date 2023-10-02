import {
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import PersonCastGrid from "../components/PersonMediaContentGrid";
import PersonDetailSkeleton from "../components/PersonDetailSkeleton";
import PersonalInfo from "../components/PersonalInfo";
import usePerson from "../hooks/usePerson";
import getImageUrl from "../services/image-url";
import { ExpandableText } from "../components/ExpandableText";
import Footer from "../components/Footer";
import { useEffect } from "react";

const PersonDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // id: string
  const { data: person, error, isLoading } = usePerson(id!);

  useEffect(() => {
    document.title = `${person?.name || "Person"} - RMDb`;
  }, []);

  if (isLoading) return <PersonDetailSkeleton />;

  if (error)
    return (
      <Text fontSize="2xl" textAlign="center">
        {error.message}
      </Text>
    );

  if (!person) return null;

  return (
    <>
      <Grid
        paddingBottom={6}
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
              src={getImageUrl(person.profile_path, "w300")}
              alt={`${person.name} poster`}
            />
          </Center>
          <PersonalInfo person={person} />
        </GridItem>
        <GridItem area="details" paddingX={8} paddingY={14}>
          <VStack spacing={4} align="stretch">
            <Heading fontSize="2xl" fontWeight="bold">
              {person.name}
            </Heading>

            <Heading
              fontSize="xl"
              fontWeight="bold"
              as="h1"
              textAlign="start"
              paddingTop={8}
            >
              biography
            </Heading>
            <ExpandableText>{person.biography}</ExpandableText>
          </VStack>
        </GridItem>
        <GridItem area="divider">
          <Divider />
        </GridItem>
        <GridItem area="cast" paddingX={8}>
          <PersonCastGrid id={id!} title="Known For" />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

export default PersonDetailPage;
