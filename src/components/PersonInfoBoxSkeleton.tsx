import {  Skeleton, Stack, VStack } from "@chakra-ui/react"









const PersonInfoBox = () => {
  return (
    <Stack direction={['column', 'row']} spacing='24px' justifyItems="center">
        <Skeleton
            boxShadow="md"
            h='90px'
            w='90px'
            borderRadius={20}
        >
            <div>contents wrapped</div>
            <div>won't be visible</div>
        </Skeleton>

        <VStack direction={['column', 'row']} spacing={4} align='stretch' padding={4}>
            <Skeleton height='10px' width='100px' />
            <Skeleton height='10px' width='230px' />
        </VStack>
        
        
    </Stack>
  )
}

export default PersonInfoBox