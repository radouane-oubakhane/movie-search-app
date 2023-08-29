import useMediaContent from "./useMediaContent";


export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}



const useMovies = (selectedTimeWindow: 'day' | 'week' | null, deps?: any[]) => useMediaContent<Movie>('/trending/movie/', selectedTimeWindow, deps);

export default useMovies;