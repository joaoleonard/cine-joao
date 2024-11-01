import { moviesGetAll } from "./moviesGetAll";

export function movieGetAleatory() {
  const movies = moviesGetAll();
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}
