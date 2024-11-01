import { MovieDTO } from "./MovieDTO";
import { moviesGetAll } from "./moviesGetAll";

export function moviesGetByGenre(genre: string): MovieDTO[] {
    const movies = moviesGetAll();
  return movies.filter(movie => movie.genre === genre);
}