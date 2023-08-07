import axios from 'axios';


const apiKey = import.meta.env.VITE_API_KEY;


export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular',
    params: {
        api_key: apiKey,
    },
})