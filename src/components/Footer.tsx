import { Divider, Text, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;

  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  return (
    <VStack>
      <Divider />
      <HStack justifyContent="center" padding={4}>
        <Text>
          &copy; 2023 Movie Search App. Developed by Radouane OUBAKHANE.
        </Text>
        {linkedInUrl && (
          <Link href={linkedInUrl} isExternal _hover={{ color: "linkedin.500" }}>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
        )}
        {githubUrl && (
          <Link href={githubUrl} isExternal _hover={{ color: "gray.600" }}>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
        )}
      </HStack>
    </VStack>
  );
};

export default Footer;
