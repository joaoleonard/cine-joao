import { useNavigation, useRoute } from "@react-navigation/native";
import {
  BackButton,
  Container,
  Description,
  GenreCard,
  GenreText,
  InfosContainer,
  LittleText,
  Title,
  TitleContainer,
} from "./styles";
import { useEffect, useState } from "react";
import { movieGetById } from "../../storage/movies/movieGetById";
import { MovieDTO } from "../../storage/movies/MovieDTO";
import Header from "../../components/Header";
import { ArrowCircleLeft } from "phosphor-react-native";
import { genresGetById } from "../../storage/genres/genresGetById";
import { GenreDTO } from "../../storage/genres/GenreDTO";

export default function Movie() {
  const [movie, setMovie] = useState<MovieDTO | null>(null);
  const [genre, setGenre] = useState<GenreDTO>();

  const navigation = useNavigation();
  const route = useRoute();

  const { movieId, genreId } = route.params as {
    movieId: number;
    genreId: number;
  };

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    const genre = genresGetById(genreId);
    setGenre(genre);

    const movieReturned = movieGetById(movieId);

    if (!movieReturned) {
      console.log("Movie not found");
    }

    setMovie(movieReturned);
  }, []);

  if (!movie) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <TitleContainer>
        <BackButton onPress={handleGoBack}>
          <ArrowCircleLeft size={32} color="#333" />
        </BackButton>
        <Title>{movie.title}</Title>
      </TitleContainer>
      <InfosContainer>
        <GenreCard color={genre?.color}>
          <GenreText>{movie.genre}</GenreText>
        </GenreCard>
        <LittleText>{movie.year}</LittleText>
      </InfosContainer>
      <Description>{movie.description}</Description>
    </Container>
  );
}
