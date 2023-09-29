import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MediaSortingAndSelectionPage from "./pages/MediaSortingAndSelectionPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import PopularPeoplePage from "./pages/PopularPeoplePage";
import MovieDetailPage from "./pages/MovieDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "movie/",
        children: [
          { path: "popular", element: <MediaSortingAndSelectionPage /> },
          { path: "top-rated", element: <MediaSortingAndSelectionPage /> },
          { path: "upcoming", element: <MediaSortingAndSelectionPage /> },
          { path: "now-playing", element: <MediaSortingAndSelectionPage /> },
          { path: ":id", element: <MovieDetailPage /> },
        ],
      },

      {
        path: "tv/",
        children: [
          { path: "popular", element: <MediaSortingAndSelectionPage /> },
          { path: "top-rated", element: <MediaSortingAndSelectionPage /> },
          { path: "on-the-air", element: <MediaSortingAndSelectionPage /> },
          {
            path: "airing-today",
            element: <MediaSortingAndSelectionPage />,
          },
        ],
      },

      { path: "person/popular", element: <PopularPeoplePage /> },

      { path: "search", element: <SearchResultsPage /> },
    ],
  },
]);

export default router;
