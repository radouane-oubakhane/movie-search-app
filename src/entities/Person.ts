import { knownFor } from "../hooks/useSearchPeople";


export interface Person {
  id: number;
  name: string;
  known_for_department: string;
  profile_path: string;
  known_for: knownFor[];
  biography: string;
  gender: number;
  birthday: string;
  place_of_birth: string;
}
