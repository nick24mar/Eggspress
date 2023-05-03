import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="sm" borderRadius={4} px={3}>
      {score}
    </Badge>
  );
}

export default CriticScore;
