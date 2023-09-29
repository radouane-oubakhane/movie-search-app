import {
  Center,
  Grid,
  GridItem,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
  VStack,
} from "@chakra-ui/react";

const DetailPageSkeleton = () => {
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
      </GridItem>
      <GridItem area="details" padding={16}>
        <VStack spacing={4} align="stretch">
          <Skeleton height="20px" width={40} />
          <HStack spacing={6} flexWrap="wrap">
            <Skeleton>
              <div>Some content here some content here</div>
            </Skeleton>
            <SkeletonCircle size="10" />
          </HStack>
          <VStack paddingY={16} spacing={6}>
            <Center>
              <Skeleton height="20px" width={40} />
            </Center>
            <Stack w="100%">
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
              <Skeleton height="10px" />
            </Stack>
          </VStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default DetailPageSkeleton;



