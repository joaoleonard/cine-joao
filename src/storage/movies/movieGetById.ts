import { MovieDTO } from "./MovieDTO";
import { moviesGetAll } from "./moviesGetAll";

export function movieGetById(id: number): MovieDTO | null {
  const movies = moviesGetAll();
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) return null;

  return movie;
}
