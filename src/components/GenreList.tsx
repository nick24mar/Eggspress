import { Flex, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem
          key={genre.id}
          backgroundColor={
            genre.id === selectedGenre?.id ? "whiteAlpha.50" : ""
          }
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
            <Button variant="link" onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
