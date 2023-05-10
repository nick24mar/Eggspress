import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genresData } = useGenres();
  const { data: platformsData } = usePlatform();

  const genre = genresData?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platformsData?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  return (
    <Heading as="h1" fontSize="5xl">
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Heading>
  );
}

export default GameHeading;
