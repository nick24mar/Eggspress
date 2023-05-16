import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import TextExpandable from "../components/TextExpandable";
import useGame from "../hooks/useGame";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading mb={3}>{game?.name}</Heading>
      <TextExpandable children={game?.description_raw!} maxChars={300} />
      <GameAttributes game={game!} />
    </>
  );
}

export default GameDetailPage;
