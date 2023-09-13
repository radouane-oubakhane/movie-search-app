import { CardBody, Stack, CardFooter, Skeleton, SkeletonText } from "@chakra-ui/react"





const InfoBoxSkeleton = () => {
  return (
    <>
        <Skeleton
            maxW={{ base: '100%', sm: '150px' }}
            maxH={{ base: '100%', sm: '325px' }}
            borderRadius={0}
        >
            <div>contents wrapped</div>
            <div>won't be visible</div>
        </Skeleton>
        

        <Stack>
            <CardBody>
                <SkeletonText noOfLines={1} spacing='2' skeletonHeight='2' w='130px' /> 
                <SkeletonText noOfLines={1} marginY={4} spacing='2' skeletonHeight='1' w='50px' /> 
            </CardBody>

            <CardFooter>
                <SkeletonText noOfLines={4  } spacing='2' skeletonHeight='2' w='100%' /> 
            </CardFooter>
        </Stack>
    </>
  )
}

export default InfoBoxSkeleton