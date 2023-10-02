import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

const ErrorPage = () => {
  const error = useRouteError();

  useEffect(() => {
    document.title = "Error - RMDb";
  }, []);

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Something went wrong."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
