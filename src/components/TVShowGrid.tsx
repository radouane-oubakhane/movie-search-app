import { SimpleGrid, HStack, Text } from "@chakra-ui/react";

import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import TVShowCard from "./TVShowCard";
import { TVShowQuery } from "./TVShowContainer";
import useTVShows from "../hooks/useTVShows";


interface Props {
    tvShowQuery: TVShowQuery;
}



const TVShowGrid = ({ tvShowQuery }: Props) => {
    const { mediaContent: tvShows, isLoading, error } = useTVShows(tvShowQuery);
    const skeletons = Array(12).fill(0);
    

    if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>
    
    return (
        <>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl:5 }} spacing={10} padding='10px'>
                {isLoading && skeletons.map((_, index) => (
                    <CardContainer key={index}>
                        <CardSkeleton />
                    </CardContainer>
                ))}
                {tvShows.map((tvShow) => (
                    <CardContainer key={tvShow.id}>
                        <TVShowCard tvShow={tvShow} />
                    </CardContainer>
                ))}
            </SimpleGrid> 
        </>
    )
}

export default TVShowGrid