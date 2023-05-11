import {
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" mb={3} px={2}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem
            key={genre.id}
            backgroundColor={genre.id === genreId ? "whiteAlpha.50" : ""}
            className="genre-item"
            p={2}
            mb={2}
            borderRadius={8}
          >
            <Flex gap={2}>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
