import useMediaContent from "./useMediaContent";

export interface Collection {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
}

const useSearchCollections = () =>
  useMediaContent<Collection>("/search/collection", null, "search-collections");

export default useSearchCollections;
