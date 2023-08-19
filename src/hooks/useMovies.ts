import useMediaContent from "./useMediaContent";



export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}





const useMovies = (selectedTimeWindow: 'day' | 'week', deps?: any[]) => useMediaContent<Movie>('/trending/movie/', selectedTimeWindow, deps);

export default useMovies;