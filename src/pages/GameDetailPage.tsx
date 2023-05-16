import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import TextExpandable from "../components/TextExpandable";
import useGame from "../hooks/useGame";
import GameScreenshots from "../components/GameScreenshots";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading mb={3}>{game.name}</Heading>
      <TextExpandable children={game.description_raw} maxChars={300} />
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
}

export default GameDetailPage;
