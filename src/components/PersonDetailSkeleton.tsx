import { Grid, GridItem, Skeleton, Stack, VStack, Box } from "@chakra-ui/react";

const PersonDetailSkeleton = () => {
  return (
    <Grid
      justifyContent="center"
      templateAreas={{
        base: `"image" "details"`,
        sm: `"image details"`,
      }}
      templateColumns={{
        base: "1fr",
        sm: "300px 1fr",
      }}
    >
      <GridItem area="image" padding={10}>
        <Skeleton borderRadius={10} overflow="hidden" h="300px" />
        <Stack w="70%" padding={6}>
          <Skeleton height="10px" />
          <Skeleton height="10px" marginBottom={2} />
          <Skeleton height="10px" />
          <Skeleton height="10px" marginBottom={2} />
          <Skeleton height="10px" />
          <Skeleton height="10px" marginBottom={2} />
          <Skeleton height="10px" />
          <Skeleton height="10px" marginBottom={2} />
          <Skeleton height="10px" />
          <Skeleton height="10px" />
        </Stack>
      </GridItem>
      <GridItem area="details" padding={10}>
        <VStack spacing={4} align="stretch">
          <Box paddingY={16}>
            <Skeleton height="20px" width={40} paddingBottom={4} marginY={4} />
            <Skeleton height="15px" width={36} />

            <Stack w="100%" paddingY={6}>
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
            </Stack>
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default PersonDetailSkeleton;
