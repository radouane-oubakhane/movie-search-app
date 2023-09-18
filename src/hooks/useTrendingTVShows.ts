import useMediaContent from "./useMediaContent";



export interface TVShow {
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
    overview: string;
}





const useTrendingTVShows = (selectedTimeWindow: 'day' | 'week') => useMediaContent<TVShow>(
        '/trending/tv', 
        selectedTimeWindow, 
        "trending-tv-shows"
    );

export default useTrendingTVShows;