import {
  SkeletonText,
  Skeleton,
  VStack,
  SkeletonCircle,
  HStack,
} from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Skeleton borderRadius={10} overflow="hidden" h="300px" />
      <HStack justifyContent="space-between">
        <SkeletonText noOfLines={3} spacing="2" skeletonHeight="2" w="130px" />
        <SkeletonCircle size="10" />
      </HStack>
    </VStack>
  );
};

export default CardSkeleton;
