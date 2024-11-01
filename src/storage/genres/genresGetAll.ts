import { GenreDTO } from "./GenreDTO";

const genres: GenreDTO[] = [
  { id: 1, name: "Ação", color: "#FFB6C1" },
  { id: 2, name: "Aventura", color: "#FFDAB9" },
  { id: 3, name: "Comédia", color: "#E6E6FA" },
  { id: 4, name: "Drama", color: "#D8BFD8" },
  { id: 5, name: "Ficção Científica", color: "#FFFACD" },
  { id: 6, name: "Romance", color: "#FFE4E1" },
  { id: 7, name: "Suspense", color: "#F0E68C" },
  { id: 8, name: "Terror", color: "#E0FFFF" },
  { id: 9, name: "Documentário", color: "#adffe9" },
  { id: 10, name: "Aleatório", color: "#959595" },
];

export function genresGetAll() {
  return genres;
}
