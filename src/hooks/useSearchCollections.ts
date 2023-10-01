import { Collection } from "../entities/Collection";
import useMediaContent from "./useMediaContent";

const useSearchCollections = () =>
  useMediaContent<Collection>("/search/collection", null, "search-collections");

export default useSearchCollections;
