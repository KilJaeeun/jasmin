import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: { api_key: "10923b261ba94d897ac6b81148314a3f", language: "en-US" },
});

export const movies = {
    movie: (id) =>
        api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
    popular: () => api.get("movie/popular"),
    upComing: () => api.get("movie/upcoming"),
    nowPlaying: () => api.get("movie/now_playing"),
    searchMovies: (term) =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term),
            },
        }),
};

export const tv = {
    show: (id) =>
        api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
    popular: () => api.get("tv/popular"),
    topRated: () => api.get("tv/top_rated"),
    airingToday: () => api.get("tv/airing_today"),
    searchTv: (term) =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term),
            },
        }),
};