import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box p={5}>
        <Heading>Oppss..</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Error 404 | Page Not Found"
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
