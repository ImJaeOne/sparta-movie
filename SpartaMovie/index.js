import { movieListUI } from './ui.js';
import { getMovieList } from './api.js';

const movieListContainer = document.getElementById('movie-list');

const renderMovieListUI = async () => {
    const listData = await getMovieList();
    listData.forEach((data) => {
        movieListContainer.innerHTML += movieListUI(data);
    });
};

renderMovieListUI();
