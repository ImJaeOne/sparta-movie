import { movieListUI } from './ui.js';
import { getMovieList, getMovieName } from './api.js';

const movieListContainer = document.getElementById('movie-list');

const renderMovieList = async (search = '') => {
    let listData;
    if (search) {
        listData = await getMovieName(search);
    } else {
        listData = await getMovieList();
    }

    movieListContainer.innerHTML = '';
    
    listData.forEach((data) => {
        movieListContainer.innerHTML += movieListUI(data);
    });
};

const searchInput = document.getElementById('movie-search');

const handleSearch = (e) => {
    const search = e.target.value.trim();
    renderMovieList(search); 
};

const debounce = (func, delay) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

searchInput.addEventListener('input', debounce(handleSearch, 300));

renderMovieList();
