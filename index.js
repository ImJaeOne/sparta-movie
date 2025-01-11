import { movieListUI, movieDetailUI } from './ui.js';
import { getMovieList, getMovieName, getMovieDetail } from './api.js';

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

const modal = document.getElementsByClassName('modal')[0];
const modalContent = document.getElementsByClassName('modal-content-container')[0];

const toggleModal = () => modal.classList.toggle('hidden');

movieListContainer.addEventListener('click', async (e) => {
    const movieItem = e.target.closest('.movie-item');
    const movieId = movieItem.getAttribute('movie-id');
    const detailData = await getMovieDetail(movieId);
    modalContent.innerHTML = movieDetailUI(detailData);
    toggleModal();
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-background') || e.target.classList.contains('modal-close-btn')) {
        toggleModal();
    }
})

searchInput.addEventListener('input', debounce(handleSearch, 300));

renderMovieList();