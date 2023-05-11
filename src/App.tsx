import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" p={6}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" p={6}>
        <GameHeading />
        <Flex gap={4} my={6}>
          <PlatformSelector />
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
