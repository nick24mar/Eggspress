import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
  return (
    <Box my={5}>
      <Heading as="dt" color="gray.300" fontSize="md" mb={3}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
