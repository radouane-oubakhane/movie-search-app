import { Card, CardBody, Image, Stack, Heading, Text, CardFooter } from "@chakra-ui/react"
import getImageUrl from "../services/image-url";
import { TVShow } from "../hooks/useTrendingTVShows";
import formatDate from "../services/format-date";


interface Props {
    tvShow: TVShow;
}



const TVShowInfoBox = ({ tvShow }: Props) => {
  return (
    <>
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '150px' }}
            src={getImageUrl(tvShow.poster_path, 'w300')} 
            alt={`${tvShow.name} poster`} 
        />

        <Stack>
            <CardBody>
            <Heading size='md'>{tvShow.name}</Heading>

            <Text py='2' color="gray">
                {formatDate(tvShow.first_air_date)}
            </Text>
            </CardBody>

            <CardFooter>
            <Text py='2'>
                {tvShow.overview}
            </Text>
            </CardFooter>
        </Stack>
    </>
  )
}

export default TVShowInfoBox