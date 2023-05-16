import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import TextExpandable from "../components/TextExpandable";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading mb={3}>{game?.name}</Heading>
      <TextExpandable children={game?.description_raw!} maxChars={300} />
    </>
  );
}

export default GameDetailPage;
