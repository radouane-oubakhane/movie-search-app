import { VStack, Text } from "@chakra-ui/react";
import InfoBoxContainer from "./InfoBoxContainer";
import InfoBoxSkeleton from "./InfoBoxSkeleton";
import { Collection } from "../hooks/useSearchCollections";
import CollectionInfoBox from "./CollectionInfoBox";


interface Props {
  collections: Collection[];
  isLoading: boolean;
  error: string | null;
}


const CollectionInfoBoxGrid = ({ collections, isLoading, error }: Props) => {
  const skeletons = Array(12).fill(0);


  if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>;


  return (
    <VStack
    spacing={4}
    align='stretch'
    >
      {
        isLoading && skeletons.map((_, index) => (
          <InfoBoxContainer key={index}>
            <InfoBoxSkeleton />
          </InfoBoxContainer>
        ))
      }
      {
        collections.map((collection, index) => (
          <InfoBoxContainer key={index}>
            <CollectionInfoBox
            collection={collection}
            />
          </InfoBoxContainer>
        ))
      }
    </VStack>
  )
}

export default CollectionInfoBoxGrid