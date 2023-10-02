import { Box, Center } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box w="100%">
      <Center>{children}</Center>
    </Box>
  );
};

export default CardContainer;
