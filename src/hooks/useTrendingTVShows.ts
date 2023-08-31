import useMediaContent from "./useMediaContent";



export interface TVShow {
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
}





const useTrendingTVShows = (selectedTimeWindow: 'day' | 'week') => useMediaContent<TVShow>('/trending/tv', selectedTimeWindow);

export default useTrendingTVShows;