import { CardBody, Image, Stack, Heading, Text, CardFooter } from "@chakra-ui/react"
import getImageUrl from "../services/image-url";
import { Collection } from "../entities/Collection";


interface Props {
    collection: Collection;
}


const CollectionInfoBox = ({ collection }: Props) => {
  return (
    <>
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '150px' }}
            src={getImageUrl(collection.poster_path, 'w300')} 
            alt={`${collection.name} poster`} 
        />

        <Stack>
            <CardBody>
                <Heading size='md'>{collection.name}</Heading>
            </CardBody>

            <CardFooter>
                <Text py='2'>
                    {collection.overview}
                </Text>
            </CardFooter>
        </Stack>
    </>
  )
}

export default CollectionInfoBox