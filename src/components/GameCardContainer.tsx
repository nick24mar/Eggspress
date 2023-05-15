import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={8}
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.25s cubic-bezier(0,0,0,1)",
      }}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
