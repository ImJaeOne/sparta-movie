import { movieListUI, movieDetailUI } from './ui.js';
import { getMovieList, getMovieName, getMovieDetail } from './api.js';
import { setLocalStorage, getLocalStorage, getAllLocalStorage, removeLocalStorage } from './storage.js';

const movieListContainer = document.getElementById('movie-list');
const mainHeader = document.getElementsByClassName('main-header')[0];
const bookmarkBtn = document.getElementById('bookmark');
const searchOption = document.getElementById('search-type');
const searchInput = document.getElementById('movie-search');
const modal = document.getElementsByClassName('modal')[0];
const modalContent = document.getElementsByClassName('modal-content-container')[0];

let bookmarkView = false;

const renderMovieList = async (search = '') => {
    let listData;

    if (search) {
        mainHeader.textContent = `'${search}' 검색 결과`;
        listData = await getMovieName(search);
    } else if (bookmarkView) {
        mainHeader.textContent = '내 북마크';
        listData = Object.values(getAllLocalStorage());
    } else {
        mainHeader.textContent = 'TOP 20 인기 영화';
        listData = await getMovieList();
    }
    movieListContainer.innerHTML = '';
    listData.forEach((data) => {
        movieListContainer.innerHTML += movieListUI(data);
    });
};

bookmarkBtn.addEventListener('click', () => {
    bookmarkView = !bookmarkView;
    if (bookmarkView) {
        bookmarkBtn.textContent = '홈으로 이동하기';
    } else {
        bookmarkBtn.textContent = '북마크';
    }
    renderMovieList();
});


const searchDebouncing = searchInput.addEventListener(
    'input',
    debounce((e) => {
        const search = e.target.value.trim();
        renderMovieList(search);
    }, 300)
);

const searchNormal = searchInput.addEventListener(
    'keyup',
    (e) => {
        if(e.key === 'Enter'){
            const search = e.target.value.trim();
            renderMovieList(search);
        }
    }
)

let currentSearchHandler = searchNormal;

searchOption.addEventListener('change', (e) => {
    searchInput.removeEventListener('input', currentSearchHandler);
    searchInput.removeEventListener('keyup', searchNormal);

    if (e.target.value === 'search-normal') {
        currentSearchHandler = searchNormal;
        searchInput.addEventListener('keyup', currentSearchHandler);
    } else {
        currentSearchHandler = searchDebouncing;
        searchInput.addEventListener('input', currentSearchHandler);
    }
});

searchInput.addEventListener('input', currentSearchHandler);

const toggleModal = () => {
    modal.classList.toggle('hidden');
    if (modal.classList.contains('hidden')) {
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
};

movieListContainer.addEventListener('click', async (e) => {
    const movieItem = e.target.closest('.movie-item');
    if (!movieItem) return;

    const movieId = movieItem.getAttribute('movie-id');
    const detailData = await getMovieDetail(movieId);

    const bookmark = !!getLocalStorage(movieId);

    modalContent.innerHTML = movieDetailUI(detailData, bookmark);
    toggleModal();
});

const addBookmark = (movieId, data) => {
    setLocalStorage(movieId, data);
    swal('북마크 추가 ', '', 'success');
};

const deleteBookmark = (movieId) => {
    removeLocalStorage(movieId);
    swal('북마크 삭제 ', '', 'success');
};

modal.addEventListener('click', async (e) => {
    if (e.target.classList.contains('modal-background') || e.target.classList.contains('modal-close-btn')) {
        toggleModal();
        return;
    }

    const modalItem = e.target.closest('.modal-item');
    const movieId = modalItem.getAttribute('movie-id');

    if (e.target.classList.contains('modal-bookmark-btn')) {
        const isBookmarked = e.target.classList.contains('bookmark-true');

        if (isBookmarked) {
            deleteBookmark(movieId);
            e.target.textContent = '☆';
            e.target.classList.remove('bookmark-true');
            e.target.classList.add('bookmark-false');
        } else {
            const detailData = await getMovieDetail(movieId);
            addBookmark(movieId, detailData);
            e.target.textContent = '★';
            e.target.classList.remove('bookmark-false');
            e.target.classList.add('bookmark-true');
        }

        if (bookmarkView) {
            renderMovieList();
        }
    }
});

renderMovieList();


function debounce(func, delay){
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};