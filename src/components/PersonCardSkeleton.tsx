import { HStack, Skeleton, SkeletonText, VStack } from "@chakra-ui/react"

const PersonCardSkeleton = () => {
  return (
    <VStack 
    spacing={4}
    align='stretch'>
      <Skeleton borderRadius={10} overflow='hidden' h='300px' />
      <HStack>
          <SkeletonText noOfLines={3} spacing='2' skeletonHeight='2' w='200px' />     
      </HStack>
    </VStack>
  )
}

export default PersonCardSkeleton