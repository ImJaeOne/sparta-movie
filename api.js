const access = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDgxYzZlZmM2OTk1ZjU2NzNmNTlmZmVkMDU0YmM4NSIsIm5iZiI6MTczNjI5NjY0MC4zMTksInN1YiI6IjY3N2RjOGMwMzRhNGU3NWU0OTdhZjcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HPDwYNM0oE_mzBu3ZBj3a1YL_ZKjX9fjRJPQxmK9kh8',
    },
};

export const getMovieList = async () => {
    try {
        const res = await fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko&page=1&sort_by=popularity.desc',
            access
        );
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getMovieName = async (movieName) => {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=ko`,
            access
        );
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error('Error:', error);
    }
};
