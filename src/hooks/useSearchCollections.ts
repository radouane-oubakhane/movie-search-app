import { MediaContentQuery } from "../store";
import useMediaContent from "./useMediaContent";

export interface Collection {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
}

const useSearchCollections = (mediaContentQuery: MediaContentQuery) =>
  useMediaContent<Collection>(
    "/search/collection",
    null,
    "search-collections",
    mediaContentQuery
  );

export default useSearchCollections;
