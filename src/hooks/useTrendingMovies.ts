import useMediaContent from "./useMediaContent";


export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}



const useTrendingMovies = (selectedTimeWindow: 'day' | 'week') => useMediaContent<Movie>('/trending/movie', selectedTimeWindow);

export default useTrendingMovies;