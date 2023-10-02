


import { Grid, GridItem } from "@chakra-ui/react";
import ContainerHeading from "../components/ContainerHeading";
import PersonGrid from "../components/PersonGrid";
import { useEffect } from "react";

const PopularPeoplePage = () => {

   useEffect(() => {
    document.title = "Popular People - RMDb";
  }, []);
  

  return (
    <Grid templateAreas={{
        base: `"heading" "content"`,
        lg: `"heading" "content"`,
        }}
      templateColumns={{
          base: '1fr',
          lg: '1fr'
        }}
      >
        <GridItem area="heading" paddingX={2}>
          <ContainerHeading category="Movies" title="Popular People" />
        </GridItem>
        <GridItem area="content">
          <PersonGrid />
        </GridItem>
      </Grid>
  );
};

export default PopularPeoplePage;


