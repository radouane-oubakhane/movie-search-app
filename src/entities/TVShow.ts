import { Genre } from "./Genre";




export interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  overview: string;
  adult: boolean;
  original_language: string;
  genres: Genre[];
  runtime: number;
}
