import {
  Button,
  ButtonText,
  Container,
  GenresContainer,
  Label,
  Subtitle,
} from "./styles";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import ColoredCard from "../../components/ColoredCard";
import { useEffect, useState } from "react";
import { GenreDTO } from "../../storage/genres/GenreDTO";
import { genresGetAll } from "../../storage/genres/genresGetAll";
import { moviesGetAll } from "../../storage/movies/moviesGetAll";

export default function Home() {
  const [genres, setGenres] = useState<GenreDTO[]>([]);
  const navigation = useNavigation();

  function handleSelectGenre(genreId: number) {
    const genre = genres.find((genre) => genre.id === genreId);

    if (!genre) return;

    if (genre.name === "Aleatório") {
      return handleSelectARandomMovie();
    }

    navigation.navigate("Genre", { genreId: genre.id });
  }

  function handleSelectARandomMovie() {
    const randomGenreId = Math.floor(Math.random() * genres.length);
    const genre = genres.find((genre) => genre.id === randomGenreId);

    if (!genre) return;

    const allMovies = moviesGetAll();
    const moviesOfGenre = allMovies.filter(
      (movie) => movie.genre === genre.name
    );
    const randomMovieIndex = Math.floor(Math.random() * moviesOfGenre.length);
    const randomMovieId = moviesOfGenre[randomMovieIndex].id;

    navigation.navigate("Movie", { movieId: randomMovieId, genreId: genre.id });
  }

  function handleGoBackToWelcome() {
    navigation.navigate("Welcome");
  }

  useEffect(() => {
    const genresReturned = genresGetAll();
    setGenres(genresReturned);
  }, []);

  return (
    <Container>
      <Header />
      <Subtitle>Seja bem-vinda!</Subtitle>
      <Label>
        Se prepare para uma noite de cinema em casa com seu querido marido!
      </Label>
      <Label>Escolha o gênero de filme que gostaria de ver:</Label>
      <GenresContainer>
        {genres.map((genre) => (
          <ColoredCard
            key={genre.name}
            title={genre.name}
            color={genre.color}
            onPress={() => handleSelectGenre(genre.id)}
          />
        ))}
      </GenresContainer>
      <Button onPress={handleGoBackToWelcome}>
        <ButtonText>Voltar</ButtonText>
      </Button>
    </Container>
  );
}
