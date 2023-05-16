import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

function TextExpandable({ children, maxChars = 100 }: Props) {
  const [isExpanded, setExpandStatus] = useState<boolean>();

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <Text>
      {text}
      <Button
        colorScheme="yellow"
        size="xs"
        onClick={() => setExpandStatus(!isExpanded)}
        marginLeft={2}
      >
        {isExpanded ? "read less" : "read more"}
      </Button>
    </Text>
  );
}

export default TextExpandable;
