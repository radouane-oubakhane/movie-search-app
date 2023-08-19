import useMediaContent from "./useMediaContent";



export interface TVShow {
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
}





const useTVShows = (selectedTimeWindow: 'day' | 'week', deps?: any[]) => useMediaContent<TVShow>('/trending/tv/', selectedTimeWindow, deps);

export default useTVShows;