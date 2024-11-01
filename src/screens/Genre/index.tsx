import { useNavigation, useRoute } from "@react-navigation/native";
import {
  BackButton,
  Container,
  Content,
  Description,
  TitleContainer,
  MoviesContainer,
  Title,
} from "./styles";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { MovieDTO } from "../../storage/movies/MovieDTO";
import { moviesGetByGenre } from "../../storage/movies/moviesGetByGenre";
import ColoredCard from "../../components/ColoredCard";
import { ArrowCircleLeft } from "phosphor-react-native";
import { genresGetById } from "../../storage/genres/genresGetById";
import { GenreDTO } from "../../storage/genres/GenreDTO";

type RouteParams = {
  genreId: number;
};

export default function Genre() {
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [genre, setGenre] = useState<GenreDTO>();

  const navigation = useNavigation();
  const route = useRoute();
  const { genreId } = route.params as RouteParams;

  function handleBackToHome() {
    navigation.navigate("Home");
  }

  function handleGoToMovie(id: number) {
    navigation.navigate("Movie", { movieId: id, genreId: genre?.id });
  }

  useEffect(() => {
    const genre = genresGetById(genreId);
    setGenre(genre);
    const movies = moviesGetByGenre(genre.name);
    setMovies(movies);
  }, []);

  return (
    <Container>
      <Content>
        <Header />
        <TitleContainer>
          <BackButton onPress={handleBackToHome}>
            <ArrowCircleLeft size={32} color="#333" />
          </BackButton>
          <Title>{genre?.name}</Title>
        </TitleContainer>
        <Description>
          Estes são os filmes deste gênere que estão em nosso catálogo:
        </Description>
        <MoviesContainer>
          {movies.map((movie) => {
            return (
              <ColoredCard
                key={movie.id}
                title={movie.title}
                color={genre?.color}
                onPress={() => handleGoToMovie(movie.id)}
              />
            );
          })}
        </MoviesContainer>
      </Content>
    </Container>
  );
}
