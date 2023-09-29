import { SimpleGrid } from "@chakra-ui/react";



interface Props {
    children: React.ReactNode
}



const CastGridContainer = ({children}: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={10}>
      {children}
    </SimpleGrid>
  );
};

export default CastGridContainer;
