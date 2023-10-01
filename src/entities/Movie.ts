import { Genre } from "./Genre";




export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  backdrop_path: string;
  adult: boolean;
  genres: Genre[];
  original_language: string;
  runtime: number;
}
