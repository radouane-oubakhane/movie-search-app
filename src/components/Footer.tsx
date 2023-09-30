import { Divider, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack>
      <Divider />
      <Text textAlign="center" padding={4}>
        &copy; 2023 Movie Search App. Developed by Radouane OUBAKHANE.
      </Text>
    </VStack>
  );
};

export default Footer;



