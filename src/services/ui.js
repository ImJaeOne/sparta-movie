export const movieListUI = (data) => {
    const max = 10;
    const starPercentage = (data.vote_average / max) * 100;

    return `
    <div class="movie-item" movie-id="${data.id}">
        <img class="movie-image" src='https://image.tmdb.org/t/p/original${data.poster_path}'></img>
        <div class="movie-info">
            <div class="movie-title">${data.title}</div>
            <div class="movie-rate">
                    <div class="stars" style="width: ${starPercentage}%"></div>
            </div>
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
            }'></img>
            <div class="modal-title">${data.title}</div>
            <div class="modal-content">${data.overview}</div>
            <div class="modal-date">개봉일: ${data.release_date}</div>
            <div class="modal-rate">평점: ${data.vote_average}</div>
        </div>
    `;
};
