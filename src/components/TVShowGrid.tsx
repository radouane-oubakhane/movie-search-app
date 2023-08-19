import { Heading, SimpleGrid, HStack } from "@chakra-ui/react";

import TVShowCard from "./TVShowCard"
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import TrendingContentSelector from "./TrendingContentSelector";
import { useState } from "react";
import useTVShows from "../hooks/useTVShows";



const TVShowGrid = () => {
    const [selectedTimeWindow, setSelectedTimeWindow] = useState<'day' | 'week'>('day')
    const { mediaContent: tvShows, isLoading, error } = useTVShows(selectedTimeWindow, [selectedTimeWindow])
    const skeletons = Array(12).fill(0)
    
    return (
        <>
            <HStack justifyContent='space-between' padding='10px'>
                <Heading as='h1' size='2xl'>Trending TV shows</Heading>
                <TrendingContentSelector onSelectTimeWindow={(timeWindow: 'day' | 'week') => setSelectedTimeWindow(timeWindow)} />
            </HStack>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{sm: 2, md: 3, lg: 4, xl:6}} spacing={10} padding='10px'>
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