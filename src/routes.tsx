import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MediaSortingAndSelectionPage from "./pages/MediaSortingAndSelectionPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {path: 'movie/popular', element: <MediaSortingAndSelectionPage />},
            {path: 'movie/top-rated', element: <MediaSortingAndSelectionPage />},
            {path: 'movie/upcoming', element: <MediaSortingAndSelectionPage />},
            {path: 'movie/now-playing', element: <MediaSortingAndSelectionPage />},

            {path: 'tv/popular', element: <MediaSortingAndSelectionPage />},
            {path: 'tv/top-rated', element: <MediaSortingAndSelectionPage />},
            {path: 'tv/on-the-air', element: <MediaSortingAndSelectionPage />},
            {path: 'tv/airing-today', element: <MediaSortingAndSelectionPage />},
        ]
    }
])

export default router;