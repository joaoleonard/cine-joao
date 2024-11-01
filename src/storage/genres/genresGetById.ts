import { GenreDTO } from "./GenreDTO";
import { genresGetAll } from "./genresGetAll";

export function genresGetById(id: number): GenreDTO {
  const genres = genresGetAll();

  const genre = genres.find((g) => g.id === id);

  if (!genre) {
    throw new Error("Genre not found");
  }

  return genre;
}
