import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Person } from "./useSearchPeople";



const usePerson = (id: number | string) =>
  useQuery<Person, Error>({
    queryKey: ["movie", id],
    queryFn: () =>
      apiClient
        .get<Person>("/person/" + id)
        .then((response) => response.data),
  });

export default usePerson;
