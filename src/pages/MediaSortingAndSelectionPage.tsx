import { useLocation } from "react-router-dom";
import MovieContainer from "../components/MovieContainer";
import TVShowContainer from "../components/TVShowContainer";

const MediaSortingAndSelectionPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <>
      {path[1] === "movie" && <MovieContainer path={path[2]} />}
      {path[1] === "tv" && <TVShowContainer path={path[2]} />}
    </>
  );
};

export default MediaSortingAndSelectionPage;
