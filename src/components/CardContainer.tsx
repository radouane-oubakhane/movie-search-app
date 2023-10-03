import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return <Box w="100%">{children}</Box>;
};

export default CardContainer;
