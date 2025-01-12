export const movieListUI = (data) => {
    return `
    <div class="movie-item" movie-id="${data.id}">
        <img class="movie-image" src='https://image.tmdb.org/t/p/original${data.poster_path}' alt="이미지 없음"></img>
        <div>
            <div class="movie-title">${data.title}</div>
            <div class="movie-rate">평점: ${data.vote_average}</div>
        </div>
    </div>
`;
};

export const movieDetailUI = (data, bookmark) => {
    return `
        <div class="modal-item" movie-id="${data.id}">
            <div class="modal-header">
                <div class="modal-bookmark-btn bookmark-${bookmark}">${bookmark ? '★' : '☆'}</div>
                <div class="modal-close-btn">x</div>
            </div>
            <img class="modal-image" src='https://image.tmdb.org/t/p/original${
                data.poster_path
            }' alt="이미지 없음"></img>
            <div class="modal-title">${data.title}</div>
            <div class="modal-content">${data.overview}</div>
            <div class="modal-date">개봉일: ${data.release_date}</div>
            <div class="modal-rate">평점: ${data.vote_average}</div>
        </div>
    `;
};
