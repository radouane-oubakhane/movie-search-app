import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import languages from "../data/languages";
import { Language } from "../entities/Language";

const useLanguages = () =>
  useQuery({
    queryKey: ["languages"],
    queryFn: () =>
      apiClient
        .get<Language[]>("/configuration/languages")
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: languages,
  });

export default useLanguages;
