import { Heading, SimpleGrid, HStack, Text } from "@chakra-ui/react";

import TVShowCard from "./TVShowCard"
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import TrendingContentSelector from "./TrendingContentSelector";
import { useState } from "react";
import useTrendingTVShows from "../hooks/useTrendingTVShows";



const TVShowGrid = () => {
    const [selectedTimeWindow, setSelectedTimeWindow] = useState<'day' | 'week'>('day');
    const { mediaContent: tvShows, isLoading, error } = useTrendingTVShows(selectedTimeWindow);
    const skeletons = Array(12).fill(0)

    if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>
    
    return (
        <>
            <HStack justifyContent='space-between' padding='10px'>
                <Heading as='h1' size='2xl'>Trending TV shows</Heading>
                <TrendingContentSelector onSelectTimeWindow={(timeWindow: 'day' | 'week') => setSelectedTimeWindow(timeWindow)} selectedTimeWindow={selectedTimeWindow} />
            </HStack>
            <SimpleGrid columns={{sm: 2, md: 3, lg: 4, xl:6}} spacing={10} padding='10px'>
                {isLoading && skeletons.map((_, index) => (
                    <CardContainer key={index}>
                        <CardSkeleton />
                    </CardContainer>
                ))}
                {tvShows.slice(0, 12).map((tvShow) => (
                    <CardContainer key={tvShow.id}>
                        <TVShowCard tvShow={tvShow} />
                    </CardContainer>
                ))}
            </SimpleGrid> 
        </>
    )
}

export default TVShowGrid